// Dependencies
import { Telegraf, ContextMessageUpdate, Extra, Markup } from 'telegraf'
import { strings } from '../helpers/strings'


export function setupRules(bot: Telegraf<ContextMessageUpdate>) {  
  bot.command('rules', sendRules)
}


const keyboard = Markup.inlineKeyboard([
    Markup.urlButton( '📜', 'http://telegraf.js.org'),    
  ])
  
export function sendRules(ctx: ContextMessageUpdate) {
    return ctx.replyWithMarkdown(strings(ctx.dbchat, 'rulesText'), 
    Extra.markup(Markup.inlineKeyboard(
                    [Markup.urlButton(strings(ctx.dbchat, 'rulesButton'), strings(ctx.dbchat, 'rulesURL'))]
                 )))
  }
