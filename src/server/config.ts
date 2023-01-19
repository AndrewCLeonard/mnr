const env = process.env;

/**
 * This is what instructions say, but it doesn't work at work
 */
// export const PORT = env.PORT ?? "8080";
// export const HOST = env.HOST ?? "0.0.0.0";

/**
 * This works on Windows at work
 */
export const HOST = env.HOST ?? "localhost";
export const PORT = env.PORT ?? "3001";

export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI =
  env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  PORT,
  HOST,
  SERVER_URL,
};
