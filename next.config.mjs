/** @type {import('next').NextConfig} */
const nextConfig = {
    //reactStrictMode: true,
    //swcMinify: true,

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    fs: false,
                    dns: false,
                },
            };
        }
        return config;
    },
};

export default nextConfig;
