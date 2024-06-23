// import withPlaiceholder from "@plaiceholder/next";
// import withImages from "next-images";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "xzufpdanhnlfveztpqvm.supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.promleeblog.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.promleeblog.com",
        pathname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.promleeblog.com/:path*",
      },
    ];
  },
};

export default nextConfig;
