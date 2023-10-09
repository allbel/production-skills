import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка приложения (main.js default сборка)
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev
});

export default config;
