const repoName = '/build-your-ghost';
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProduction ? repoName : '',
  assetPrefix: isProduction ? `${repoName}/` : undefined,
};

export default nextConfig;
