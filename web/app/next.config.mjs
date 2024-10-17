/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV || 'development';
let nextConfig = {};

if (env == 'production') {
    nextConfig = {}
} else {
    nextConfig = {}
}

export default nextConfig;
