/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgSite = repoName.endsWith('.github.io');
const githubPagesBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions && repoName && !isUserOrOrgSite ? `/${repoName}` : '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: githubPagesBasePath || undefined,
  assetPrefix: githubPagesBasePath || undefined,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
