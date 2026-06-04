import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const repoName = '/build-your-ghost1.0';

/** @type {import('next').NextConfig} */
export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    basePath: isDev ? '' : repoName,
    assetPrefix: isDev ? undefined : `${repoName}/`,
  };
}
