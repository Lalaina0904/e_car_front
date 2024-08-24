/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost", // Autoriser localhost
        port: "8080", // Spécifier le port 8080
        pathname: "/**", // Autoriser tous les chemins à partir de localhost
      },
    
    ],
  },
};

export default nextConfig;

