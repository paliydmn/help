export const delocalizePath = (origPath: string, locale: string): string => origPath.replace("/" + locale + "/", '/')
