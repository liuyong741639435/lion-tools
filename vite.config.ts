import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: "tools/lion-tools.es.js", // 工具库入口
      name: "lion-tools", // 工具库名称
      fileName: (format) => `lion-tools.${format}.js`, // 工具库名称
    },
  },
});
