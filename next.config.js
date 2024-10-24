/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //   domains: ['endicottfiles.com'],
    // },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com', 
          port: '', // Optional, if you need to specify a port
          pathname: '/images/**', // Optional, if you need to specify a path
        },
        // ... more remote patterns
      ],
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
        {
          source: '/Paver/Colors-:color', // Match the pattern with the color segment
          destination: '/Paver/Colors', // Redirect to the Colors page
        },
        {
          source: '/FaceBrick/Colors/:colorName', // Match the pattern with the color segment
          destination: '/FaceBrick/Colors/IndividualColor', // Redirect to the Colors page
        },
        {
          source: '/ThinBrick/Colors/:colorName', // Match the pattern with the color segment
          destination: '/ThinBrick/Colors/IndividualColor', // Redirect to the Colors page
        },
      ];
    }
  };
  
  module.exports = nextConfig;