/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'open.api.nexon.com',
                pathname: '/static/tfd/img/**'
            }
        ]        
    }
};

export default nextConfig;
