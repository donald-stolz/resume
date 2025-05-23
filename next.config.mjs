/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // return [
    //   {
    //     source: "/resume",
    //     destination: "/",
    //     permanent: true,
    //   },
    // ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
