module.exports = {
  poweredByHeader: true,
  target: "serverless",
  env: { DOMAIN_PATH: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "http://localhost:3000/" },
}