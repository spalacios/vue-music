module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    DEBUG_MODE: true,
    BASE_URL: '"http://localhost:8080"' 
  })