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

  // 启用静态导出（生成 `out/` 目录）
  output: "export",

  // 可选：自定义静态导出行为
  images: {
    // 静态导出时，Next.js 默认不支持 `next/image` 优化
    // 可以改用 `unoptimized: true` 或第三方图片服务
    unoptimized: true,
  },

  // 可选：手动指定哪些路径需要静态生成
  // 如果项目有动态路由（如 `/works/[id]`），需在此定义
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/works": { page: "/works" },
      // 其他静态页面...
    };
  },
};

export default nextConfig;
