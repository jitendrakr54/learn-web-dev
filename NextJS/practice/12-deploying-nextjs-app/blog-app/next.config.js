const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "jitendrakr54",
        mongodb_password: "Jitendra",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-app-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "jitendrakr54",
      mongodb_password: "Jitendra",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-app",
    },
  };
};

module.exports = nextConfig;
