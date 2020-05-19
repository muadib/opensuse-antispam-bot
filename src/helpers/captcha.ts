import { create } from 'svg-captcha'
import { convert } from 'convert-svg-to-png'

export async function getImageCaptcha() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const catpcha = create({
    size: 4,
    ignoreChars: letters + letters.toUpperCase(),
    noise: 3,
  })
  return {
    png: await convert(catpcha.data, {
      puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
    }),
    text: catpcha.text,
  }
}
