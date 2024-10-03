/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: ["cdn.imagin.studio"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        port: "",
        pathname: "/getimage",
      },
    ],
  },
};

export default nextConfig;
