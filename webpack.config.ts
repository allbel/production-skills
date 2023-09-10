import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development", // режим development или production
  entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка приложения (main.js default сборка)
  output: { // куда делаем сборку приложения
    filename: "[name].[contenthash].js", // bundle.js -> [name].js -> [name].[contenthash].js (файл сборки)
    path: path.resolve(__dirname, 'build'), // путь к папке сборки
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [ // конфигурирем лоадеры (для обработки файлов, которые выходят за рамки JS: TS, CSS, SCSS, png, jpg, gif, svg)
      {
        test: /\.tsx?$/, // (файлы с расширением ts и tsx) reg находит файлы, которые необходимо пропустить через лоадер
        use: 'ts-loader', // лоадер, который необходимо использовать для этих файлов
        exclude: /node_modules/, // исключаем папку node_modules из обработки
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // расширения файлов (при импорте не будем указывать расширения этих файлов)
  },
}

export default config;
