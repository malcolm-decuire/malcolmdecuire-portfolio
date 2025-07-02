/////////////////////////////
/////////////////////////////
////////////////////////////
//////////////////////////// FAILED 202506
// ///Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/next.config.mjs
// import rehypePrism from '@mapbox/rehype-prism';
// import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
//   env: {
//     NEXT_PUBLIC_SITE_URL:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },
//   output: 'standalone', // ✅ For Docker/GCR
//   images: {
//     unoptimized: true, // ✅ This forces Next.js to serve images statically — exactly like in `yarn dev`
//   },
//   experimental: {
//     appDir: true, // ✅ Required if you're using `/app` directory (App Router)
//   },
// };

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });

// console.log(
//   '🔧 NEXT_PUBLIC_SITE_URL:',
//   process.env.NEXT_PUBLIC_SITE_URL ||
//     'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/'
// );

// export default withMDX(nextConfig);


// //APR-2025 VERSION
// // /Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/next.config.mjs
// import rehypePrism from '@mapbox/rehype-prism';
// import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
//   env: {
//     NEXT_PUBLIC_SITE_URL:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },
//   output: 'standalone', // ✅ Ensures standalone build for Docker
//   images: {
//     unoptimized: true, // ✅ Serve images statically for Docker environments
//   },
//   experimental: {
//     appDir: true, // ✅ Using App Router
//   },
// };

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });

// console.log(
//   '🔧 NEXT_PUBLIC_SITE_URL:',
//   process.env.NEXT_PUBLIC_SITE_URL ||
//     'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/'
// );

// export default withMDX(nextConfig);



//////////////////////////////
// //////////////////////////// FAILED 202506
// // ✅ next.config.mjs — aligned with Next.js 14+ and Node ESM (MJS) conventions
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // ✅ Optimized for Docker + GCP Run deployments
//   output: 'standalone',

//   // ✅ Recommended production features
//   reactStrictMode: true,
//   swcMinify: true,

//   // ✅ Public runtime environment variables with safe fallback
//   env: {
//     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://example.com/api',
//     NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
//   },

//   // ✅ Recommended security headers
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           { key: 'X-Frame-Options', value: 'DENY' },
//           { key: 'X-Content-Type-Options', value: 'nosniff' },
//           { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
//         ],
//       },
//     ];
//   },
// };

// // ✅ ESM-compliant export (required with .mjs)
// export default nextConfig;



// //////////////////
// /////////////////TEST71 20250610 -> DOCKER DOES NOT LIKE IT LOL 

// import rehypePrism from '@mapbox/rehype-prism'
// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
//   env: {
//     NEXT_PUBLIC_SITE_URL:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },
//   output: 'standalone',
//   images: {
//     unoptimized: true,
//   },
//   // ❌ Removed invalid experimental.appDir key
// }

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

// console.log(
//   '🔧 NEXT_PUBLIC_SITE_URL:',
//   process.env.NEXT_PUBLIC_SITE_URL ||
//     'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/'
// )

// // export default withMDX(nextConfig)



/////////////////FAILED 
// import rehypePrism from '@mapbox/rehype-prism';
// import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
//   env: {
//     NEXT_PUBLIC_SITE_URL:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },
//   images: {
//     unoptimized: true,
//   },
//   experimental: {
//     appDir: true,
//   },
// };

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });

// console.log(
//   '🔧 NEXT_PUBLIC_SITE_URL:',
//   process.env.NEXT_PUBLIC_SITE_URL ||
//     'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/'
// );

// export default withMDX(nextConfig);

// ///////////////////////////////////////////
// //////////////////////////////////////////
// ///////////////////////////////////////////
// ////////TEST4 20250610
// // ✅ MDX Integration (using @next/mdx correctly for Next.js 14+)
// import rehypePrism from '@mapbox/rehype-prism';
// import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

// /** 
//  * ✅ MAIN NEXT CONFIG OBJECT 
//  * Aligned with:
//  * - Next.js 14.2.29 (no deprecated fields)
//  * - App Router default behavior (no need for `appDir`)
//  * - Tailored for full SSR build (non-standalone)
//  */
// const nextConfig = {
//   // ✅ Enables .mdx alongside typical TS/JS pages
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

//   // ✅ Enables environment-based site URL
//   // 🔒 Fallback ensures GCR still works if env var not set
//   env: {
//     NEXT_PUBLIC_SITE_URL:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },

//   // ✅ Required for Tailwind image rendering without optimization layer
//   images: {
//     unoptimized: true,
//   },

//   // ❌ Removed: experimental.appDir
//   // 🚨 Not valid in Next.js 14+
//   // App Router is now assumed from folder structure
// };

// // ✅ Wrap config using @next/mdx with MDX-specific plugins
// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });

// // ✅ Console log for runtime build visibility (non-breaking)
// console.log(
//   '🔧 NEXT_PUBLIC_SITE_URL:',
//   process.env.NEXT_PUBLIC_SITE_URL ||
//     'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/'
// );

// // ✅ EXPORT FINAL CONFIG — fully aligned with modern Next.js
// export default withMDX(nextConfig);



// //////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// //UPDATED AS OF 20250610
// ///Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/next.config.mjs

// // /next.config.mjs
// import rehypePrism from '@mapbox/rehype-prism';
// import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

// /** @type {import('next').NextConfig} */
// const baseConfig = {
//   // ✅ Include MDX pages
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

//   // ✅ Required for Docker + Cloud Run standalone
//   output: 'standalone',

//   // ✅ Force unoptimized image behavior for Tailwind & GCR
//   images: {
//     unoptimized: true,
//   },

//   // ✅ Optional but helpful — stricter production behavior
//   reactStrictMode: true,
//   swcMinify: true,

//   // ✅ Public environment fallback (used in <Image> and canonical URLs)
//   env: {
//     NEXT_PUBLIC_SITE_URL:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },
// };

// // ✅ Wrap config in MDX transformer
// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });

// // ✅ Console log to confirm env works during build (non-breaking)
// console.log('🔧 NEXT_PUBLIC_SITE_URL:', baseConfig.env.NEXT_PUBLIC_SITE_URL);

// // ✅ Final export: wrapped with MDX support
// export default withMDX(baseConfig);



// import rehypePrism from '@mapbox/rehype-prism';
// import nextMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

// /** @type {import('next').NextConfig} */
// const baseConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
//   output: 'standalone',
//   images: { unoptimized: true },
//   reactStrictMode: true,
//   swcMinify: true,
//   env: {
//     NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 
//       'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
//   },
// };

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });

// console.log('🔧 NEXT_PUBLIC_SITE_URL:', baseConfig.env.NEXT_PUBLIC_SITE_URL);

// export default withMDX(baseConfig);




// next.config.mjs

import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'standalone',
  images: {
    unoptimized: true,
    // domains: ['your-cdn.com'], // Optional: uncomment and add if using remote images
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://malcolmdecuire-portfolio-app-843423371601.us-central1.run.app/',
  },
};

// Optional: Only log in development to avoid leaking env info in prod builds
if (process.env.NODE_ENV !== 'production') {
  console.log('🔧 NEXT_PUBLIC_SITE_URL:', baseConfig.env.NEXT_PUBLIC_SITE_URL);
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(baseConfig);
