import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // расширения файлов (при импорте не будем указывать расширения этих файлов)
  }
}