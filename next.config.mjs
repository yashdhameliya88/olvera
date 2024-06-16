/** @type {import('next').NextConfig} */
const nextConfig = {
    //... other configurations...
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              fallback: 'responsive-loader',
            },
          },
        ],
      });
      return config;
    },
    // Add the following configuration to enable Google Fonts
    experimental: {
      fontLoaders: [
        {
          loader: '@next/font/google',
          options: {
            subsets: ['latin'],
            displays: ['swap'],
          },
        },
      ],
    },
  };
  
  export default nextConfig;