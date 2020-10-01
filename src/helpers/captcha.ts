import { create } from 'svg-captcha'
import { convert } from 'convert-svg-to-png'

export async function getImageCaptcha() {
  //const letters = 'abcdefghijklmnopqrstuvwxyz'
  //const letters = 'osl'
  const catpcha = create({
    size: 4,
    //ignoreChars: letters + letters.toUpperCase(),
    noise: 3,
    width: 170,
    height: 100,
  })
  return {
    png: await convert(catpcha.data, {
      puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
    }),
    text: catpcha.text,
  }
}
