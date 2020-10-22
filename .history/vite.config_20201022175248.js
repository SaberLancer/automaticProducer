// vite.config.js
module.exports = {
    port: 8077, // 服务端口
    proxy: { // 代理
        // string shorthand
        "/foo": "http://localhost:4567/foo",
        // with options
        "/api": {
            target: "http://jsonplaceholder.typicode.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
    },
};