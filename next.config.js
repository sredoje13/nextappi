/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
images:{
  loader:"akamai",
  path:""
}
   
}


module.exports = {
  images:{
    domains:['images.unsplash.com','cdn.sanity.io']
  }
}
