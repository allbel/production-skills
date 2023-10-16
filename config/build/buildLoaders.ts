import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        }
      },
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/, // (файлы с расширением ts и tsx) reg находит файлы, которые необходимо пропустить через лоадер
    use: 'ts-loader', // лоадер, который необходимо использовать для этих файлов
    exclude: /node_modules/, // исключаем папку node_modules из обработки
  }

  return [ // конфигурирем лоадеры (для обработки файлов, которые выходят за рамки JS: TS, CSS, SCSS, png, jpg, gif, svg)
    typescriptLoader,
    cssLoader,
  ]
}