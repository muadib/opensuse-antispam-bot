// Dependencies
import { Chat } from '../models'
import { localizations } from './localizations'

export function strings(chat: Chat, key: string) {
  return (
    localizations[key][chat.language] ||
    localizations[key]['en'] ||
    `🤔 Localization not found, please.

Локализация не найдена, пожалуйста.`
  )
}

export * from './localizations'
