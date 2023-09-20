/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['images.pexels.com'],
  },

  webpack: (config) => {
      // Exclure le fichier HTML de node-pre-gyp de la compilation
      config.module.rules.push({
          test: /\.html$/,
          use: 'ignore-loader', // Ignorer le fichier HTML
      });
      return config;
  },
};

module.exports = nextConfig;
