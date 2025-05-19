/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用 React StrictMode（可选，用于抑制 hydration 警告）
  reactStrictMode: false,

  // 忽略 ESLint 错误（仅在构建时）
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 忽略 TypeScript 错误（仅在构建时）
  typescript: {
    ignoreBuildErrors: true,
  },

  // 默认情况下，Next.js 不会生成 `out/` 目录（除非启用 `output: "export"`）
  // 这里不配置 `output`，保持默认行为（适用于 SSR/API 项目）
};

export default nextConfig;
