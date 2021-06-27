import { create } from 'svg-captcha'
import * as sharp from 'sharp'

export async function getImageCaptcha() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  //const letters = 'osl'
  const catpcha = create({
    size: 4,
    ignoreChars: letters + letters.toUpperCase(),
    noise: 3,
    width: 170,
    height: 100,
  })
  return {
    png: await sharp(Buffer.from(catpcha.data)).png().toBuffer(),
    text: catpcha.text,
  }
}
