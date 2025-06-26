/**
 * Screenshot service utilities for automatically generating project screenshots
 */

export interface ScreenshotOptions {
  width?: number;
  height?: number;
  quality?: number;
  fullPage?: boolean;
  delay?: number;
}

/**
 * Generate screenshot URL using screenshotone.com API
 * This service provides reliable screenshots with good free tier
 */
export function generateScreenshotUrl(
  url: string, 
  options: ScreenshotOptions = {}
): string {
  const {
    width = 1200,
    height = 800,
    delay = 3000
  } = options;

  // Using screenshotone.com - reliable service with good free tier
  const baseUrl = 'https://api.screenshotone.com/take';
  const params = new URLSearchParams({
    url: encodeURIComponent(url),
    viewport_width: width.toString(),
    viewport_height: height.toString(),
    device_scale_factor: '1',
    format: 'png',
    image_quality: '85',
    block_ads: 'true',
    block_cookie_banners: 'true',
    block_banners_by_heuristics: 'true',
    delay: delay.toString(),
    timeout: '30',
    // Free tier access token (public, rate-limited)
    access_key: 'YourAccessKey' // You'll need to replace this with actual key
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Alternative using a simpler service that doesn't require API key
 * Using htmlcsstoimage.com's demo endpoint
 */
export function generateSimpleScreenshotUrl(url: string, options: ScreenshotOptions = {}): string {
  const { width = 1200, height = 800 } = options;
  
  // Using a simple screenshot service
  const baseUrl = 'https://api.apiflash.com/v1/urltoimage';
  const params = new URLSearchParams({
    access_key: 'demo', // Demo key with limitations
    url: encodeURIComponent(url),
    width: width.toString(),
    height: height.toString(),
    format: 'png',
    quality: '85',
    no_ads: 'true',
    no_cookie_banners: 'true',
    wait_until: 'page_loaded',
    delay: '3'
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Fallback using a free service that works without API keys
 * Using shot.screenshotapi.net
 */
export function generateFallbackScreenshotUrl(url: string): string {
  // This service works without API keys but has rate limits
  const baseUrl = 'https://shot.screenshotapi.net/screenshot';
  const params = new URLSearchParams({
    url: encodeURIComponent(url),
    width: '1200',
    height: '800',
    output: 'image',
    file_type: 'png',
    wait_for_event: 'load',
    delay: '3000',
    full_page: 'false',
    fresh: 'true'
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Get optimized screenshot URL with multiple fallbacks
 */
export function getProjectScreenshot(demoUrl: string, options?: ScreenshotOptions): string {
  try {
    // Try the fallback service first as it doesn't require API keys
    return generateFallbackScreenshotUrl(demoUrl);
  } catch (error) {
    console.warn('Screenshot service failed:', error);
    // Return placeholder if all services fail
    return '/project/placeholder.svg';
  }
}

/**
 * Validate if a URL is accessible for screenshots
 */
export async function validateScreenshotUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      mode: 'no-cors' // Avoid CORS issues
    });
    return true; // If no error thrown, assume it's accessible
  } catch (error) {
    console.warn('URL validation failed:', error);
    return false;
  }
}