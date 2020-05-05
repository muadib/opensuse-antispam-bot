// Dependencies
import { Telegraf, ContextMessageUpdate, Extra } from 'telegraf'
import { strings } from '../helpers/strings'

export function setupReport(bot: Telegraf<ContextMessageUpdate>) { 
  bot.command('report', async ctx => {   
    var adminUsers = ''
    try {    
        const admins = await ctx.telegram.getChatAdministrators(ctx.chat.id)    
        admins.forEach((m) => {
          if (!m.user.is_bot) {
            adminUsers = adminUsers + '@' + m.user.username + ' '
          }
        })
    } catch (error) {
      //nada  
    } 

    ctx.replyWithMarkdown(
      adminUsers,
      Extra.inReplyTo(ctx.message.message_id)
    )
  
  })
}
