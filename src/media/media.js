export function setMediaQuery(classStyle, mediaQuery) {
  for(let key in mediaQuery) {
    if(mediaQuery[key]) {
      return `${classStyle}-${key}`
    }
  }
}

