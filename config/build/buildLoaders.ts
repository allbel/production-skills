import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/, // (файлы с расширением ts и tsx) reg находит файлы, которые необходимо пропустить через лоадер
    use: 'ts-loader', // лоадер, который необходимо использовать для этих файлов
    exclude: /node_modules/, // исключаем папку node_modules из обработки
  }

  return [ // конфигурирем лоадеры (для обработки файлов, которые выходят за рамки JS: TS, CSS, SCSS, png, jpg, gif, svg)
    typescriptLoader,
  ]
}