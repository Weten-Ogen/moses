/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns:[
            {
                protocol: "https",
                hostname:"l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com",
                pathname: "/**",
                port: "",
            }
        ]
    }
};

export default nextConfig;
