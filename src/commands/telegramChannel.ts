// Dependencies
import { Telegraf, ContextMessageUpdate, Extra, Markup } from 'telegraf'
import { strings } from '../helpers/strings'


export function setupTelegram(bot: Telegraf<ContextMessageUpdate>) {  
  bot.command('telegram', sendTelegram)
}

export function sendTelegram(ctx: ContextMessageUpdate) {
  return ctx.replyWithMarkdown(strings(ctx.dbchat, 'telegramChannelText'), {
    disable_web_page_preview: false,
  })    
  }
