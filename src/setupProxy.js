const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://merchantproapi.onrender.com", // Replace with your backend server URL
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Removes the /api prefix when forwarding the request to the target server
      },
    })
  );
};
