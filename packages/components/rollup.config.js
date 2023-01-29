import vuePlugin from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
  input: "index.js",
  external: ["@fdd-ui/utils"],
  output: {
    file: "dist/fdd-ui.min.js",
    format: "es",
  },
  plugins: [nodeResolve(), commonjs(), vuePlugin()],
};
