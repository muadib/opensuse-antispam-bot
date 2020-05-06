// Dependencies
import { Telegraf, ContextMessageUpdate, Extra } from 'telegraf'
import { strings } from '../helpers/strings'

export function setupReport(bot: Telegraf<ContextMessageUpdate>) { 
  bot.command('report_old', async ctx => {   

    var adminUsers = ''
    try {    
        const admins = await ctx.telegram.getChatAdministrators(ctx.chat.id)    
        admins.forEach((m) => {
          if (!m.user.is_bot) {
            adminUsers = adminUsers + '@' + m.user.username + ' '
          }
        })
        
        ctx.replyWithMarkdown(
          adminUsers,
          Extra.inReplyTo(ctx.message.message_id)
        )
        
    } catch (err) {
      console.error(err)
      ctx.replyWithMarkdown(
        '@warrensanchez - ',
        Extra.inReplyTo(ctx.message.message_id)
      )
    }  

    
  
  })
  
}

export function setupReport2(bot: Telegraf<ContextMessageUpdate>) {  
  bot.command('report', sendReport)
}

export function sendReport(ctx: ContextMessageUpdate) {

  var adminUsers = strings(ctx.dbchat, 'reportToAdmins')
  try {    
    ctx.telegram.getChatAdministrators(ctx.chat.id)
    .then(function(data) {
      
      data.forEach((m) => {
        if (!m.user.is_bot) {
          adminUsers = adminUsers + '@' + m.user.username + ' '
        }
      })

      return ctx.replyWithMarkdown(adminUsers, {
        disable_web_page_preview: true,
      })

    })
  } catch (err) {
    console.error(err)
    return ctx.replyWithMarkdown('@warrensanchez - ', {
      disable_web_page_preview: true,
    })
  }    
}
