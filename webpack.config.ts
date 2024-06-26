import path from "path";
import webpack from "webpack";
import buildWebpackConfing from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development"

const config: webpack.Configuration = buildWebpackConfing({
  mode: "development",
  paths,
  isDev
});

export default config;
