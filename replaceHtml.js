function replaceHtml(htmlString, hashObject) {
  const filesArray = Object.keys(hashObject)
  let newHtmlString = htmlString
  
  function replaceSrc(file) {
    const srcAttributeDblQuote = `src="${file}"`
    const srcAttributeSingQuote = `src='${file}'`
    const hash = hashObject[file]
    const classAttribute = `class='${hash}'`
    
    while (newHtmlString.includes(srcAttributeDblQuote)) {
      newHtmlString = newHtmlString.replace(srcAttributeDblQuote, classAttribute)  
    }
    while (newHtmlString.includes(srcAttributeSingQuote)) {
      newHtmlString = newHtmlString.replace(srcAttributeSingQuote, classAttribute)  
    }
  }
  
  filesArray.forEach(replaceSrc)
  
  return newHtmlString  
}

module.exports = replaceHtml