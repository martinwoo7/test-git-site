import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repo = "bam-lab";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/imgs",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
    NEXT_PUBLIC_BASE_PATH: assetPrefix,
  },
  // Add this redirects function
  async redirects() {
    return [
      {
        source: "/",
        destination: basePath, // Must match your basePath
        basePath: false, // Prevents Next.js from doubling the path
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
