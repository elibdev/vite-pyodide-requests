import { createLogger, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const logger = createLogger();
const loggerWarn = logger.warn;

logger.warn = (msg, options) => {
  // Ignore warnings from pyodide distribution
  if (msg.includes("/public/pyodide/")) return;
  loggerWarn(msg, options);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["**/*.md"],
  // resolve: {
  //   alias: {
  //     pyodide: "./public/pyodide/pyodide.mjs",
  //   },
  // },
  optimizeDeps: { exclude: ["pyodide"] },
  customLogger: logger,
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "pyodide",
  //       "./public/pyodide/",
  //       // /node_modules/,
  //     ],
  //   },
  // },
});
