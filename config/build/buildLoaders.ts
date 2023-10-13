import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
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