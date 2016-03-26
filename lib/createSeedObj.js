const cheerio = require('cheerio')

function createSeedObj (htmlStrings, filesObj) {
  const seedObj = {}

  htmlStrings.map((html) => {
    const pathArray = []
    const srcArray = []

    const $ = cheerio.load(html)
    const $src = $('body').find('[src]')

    // load seedArray with files to seed
    $src.each((index, elem) => {
      const src = $(elem).attr('src')

      if (!filesObj[src]) return
      if (pathArray.indexOf(src) < 0) pathArray.push(filesObj[src].path)
      if (srcArray.indexOf(src) < 0) srcArray.push(src)
    })

    return [pathArray, srcArray]
  }).forEach((array, index) => {
    seedObj[index] = {
      paths: array[0],
      srcs: array[1]
    }
  })

  return seedObj
}

module.exports = createSeedObj
