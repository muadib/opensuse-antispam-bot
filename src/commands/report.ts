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
        
        ctx.reply(adminUsers, {
          disable_web_page_preview: true,
        })
        
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
  bot.command(['report', 'spam'], sendReport)
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

      return ctx.reply(adminUsers, {
        disable_web_page_preview: true,
      })

    })
  } catch (err) {
    console.error(err)
    return ctx.reply('@warrensanchez - ', {
      disable_web_page_preview: true,
    })
  }    
}

export function setupReport_test(bot: Telegraf<ContextMessageUpdate>) {  
  bot.command('report_test', sendReport_test)
}

export function sendReport_test(ctx: ContextMessageUpdate) {

  var adminUsers = strings(ctx.dbchat, 'reportToAdmins')
  
  try {    
    ctx.telegram.getChatAdministrators(ctx.chat.id)
    .then(function(data) {      
      data.forEach((m) => {
        if (!m.user.is_bot) {
          if (m.user.username == undefined)
            adminUsers = adminUsers + '['+ m.user.first_name +'](tg://user?id='+m.user.id+')' + ' ';
            else
            adminUsers = adminUsers + '@' + m.user.username + ' ';          
        }
      })

      return ctx.replyWithMarkdown(adminUsers, {
         disable_web_page_preview: true,
       })

    })
    .catch (function(err) {
        console.error(err);
        return ctx.reply('@warrensanchez - ', {
          disable_web_page_preview: true,
        })
    });
  } catch (err) {    
    console.error(err)
    return ctx.reply('@warrensanchez - ', {
      disable_web_page_preview: true,
    })
  }    
}
