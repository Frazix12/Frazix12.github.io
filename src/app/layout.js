import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Frazix",
  description: "Hello, I'm a full-stack developer from Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Frazix's homepage" />
        <meta name="author" content="Frazix" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Frazix" />

        <meta content="#0e1017" name="theme-color" />
        <meta content="#0e1017" name="msapplication-navbutton-color" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Frazix's Homepage" />
        <meta
          name="description"
          content="Hello, I'm a full-stack developer from Bangladesh"
        />
        <meta name="copyright" content="Frazix12" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frazix.vercel.app/" />
        <meta property="og:title" content="Frazix's Homepage" />
        <meta
          property="og:description"
          content="Hello, I'm a full-stack developer from Bangladesh"
        />
        <meta
          property="og:image"
          content="http://res.cloudinary.com/dpu5ywrox/image/upload/v1654273284/bd4qai7c7u05aepc0tfa.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frazix.vercel.app/" />
        <meta property="twitter:title" content="Frazix's Homepage" />
        <meta
          property="twitter:description"
          content="Hello, I'm a full-stack developer from Bangladesh"
        />
        <meta
          property="twitter:image"
          content="http://res.cloudinary.com/dpu5ywrox/image/upload/v1654273284/bd4qai7c7u05aepc0tfa.png"
        />

        <title>Frazix</title>
      </Head>
      <body className={JetBrainsMono.className}>{children}</body>
    </html>
  );
}
