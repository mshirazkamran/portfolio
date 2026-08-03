/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "build",
    images: {
        unoptimized : true,
    },
    experimental: {
        optimizePackageImports: ['@phosphor-icons/react'],
    },
};

export default nextConfig;
