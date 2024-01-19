/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kinopoiskapiunofficial.tech',
          port: '',
        },
        {
          protocol: "https",
          hostname: "avatars.mds.yandex.net",
          port: '',
        },
        {
          protocol: "https",
          hostname: "st.kp.yandex.net",
          port: '',
        }
      ],
    },
  }

module.exports = nextConfig
