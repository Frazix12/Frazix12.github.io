"use client";

import { useState, useEffect } from 'react';
import { getProjectScreenshot } from '@/lib/screenshot';

interface UseProjectScreenshotOptions {
  width?: number;
  height?: number;
  quality?: number;
  enabled?: boolean;
}

export function useProjectScreenshot(
  demoUrl: string, 
  options: UseProjectScreenshotOptions = {}
) {
  const [screenshotUrl, setScreenshotUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { enabled = true, ...screenshotOptions } = options;

  useEffect(() => {
    if (!enabled || !demoUrl) {
      setIsLoading(false);
      return;
    }

    const generateScreenshot = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Generate screenshot URL
        const url = getProjectScreenshot(demoUrl, screenshotOptions);
        
        // Test if the screenshot URL is accessible
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
          setScreenshotUrl(url);
        } else {
          throw new Error('Screenshot service unavailable');
        }
      } catch (err) {
        console.warn('Failed to generate screenshot:', err);
        setError('Failed to generate screenshot');
        // Fallback to a placeholder or default image
        setScreenshotUrl('/project/placeholder.svg');
      } finally {
        setIsLoading(false);
      }
    };

    generateScreenshot();
  }, [demoUrl, enabled, JSON.stringify(screenshotOptions)]);

  return { screenshotUrl, isLoading, error };
}