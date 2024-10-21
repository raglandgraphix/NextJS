/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['endicottfiles.com'],
    },
    async rewrites() {
      return [
        {
          source: '/FaceBrick/Colors-:color', // Match the pattern with the color segment
          destination: '/FaceBrick/Colors', // Redirect to the Colors page
        },
        {
          source: '/ThinBrick/Colors-:color', // Match the pattern with the color segment
          destination: '/ThinBrick/Colors', // Redirect to the Colors page
        },
      ];
    }
  };
  
  module.exports = nextConfig;