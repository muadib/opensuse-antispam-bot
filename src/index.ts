import 'module-alias/register'
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
<<<<<<< HEAD
// Dependencies
import { attachUser } from './middlewares/attachUser'
import { bot } from './helpers/bot'
import { setupHelp } from './commands/help'
import { setupLanguage } from './commands/language'
import { setupCaptcha } from './commands/captcha'
import { setupNewcomers } from './helpers/newcomers'
import { setupTimeLimit } from './commands/timeLimit'
import { setupLock } from './commands/lock'
import { checkTime } from './middlewares/checkTime'
import { setupRestrict } from './commands/restrict'
import { checkRestrict } from './middlewares/checkRestrict'
import { setupNoChannelLinks } from './commands/noChannelLinks'
import { checkNoChannelLinks } from './middlewares/checkNoChannelLinks'
import { setupDeleteEntryMessages } from './commands/deleteEntryMessages'
import { setupGreeting } from './commands/greeting'
import { setupTrust } from './commands/trust'
import { setupStrict } from './commands/strict'
import { setupCaptchaMessage } from './commands/captchaMessage'
import { setupTestLocales } from './commands/testLocales'
import { setupDeleteGreetingTime } from './commands/deleteGreetingTime'
import { setupBanUsers } from './commands/banUsers'
import { messageSaver } from './middlewares/messageSaver'
import { setupDeleteEntryOnKick } from './commands/deleteEntryOnKick'
import { setupCAS } from './commands/cas'
import { setupBan } from './commands/ban'
import { setupUnderAttack } from './commands/underAttack'
import { noWait } from './middlewares/noWait'
import { setupNoAttack } from './commands/noAttack'
import { setupViewConfig } from './commands/viewConfig'
import { setupButtonText } from './commands/buttonText'
import { setupAllowInvitingBots } from './commands/allowInvitingBots'
import { setupAdmin } from './commands/admin'
import { setupGreetingButtons } from './commands/greetingButtons'
import { setupReport, setupReport2, setupReport_test } from './commands/report'
import { setupRules } from './commands/rules'
import { setupTelegram } from './commands/telegramChannel'

// Make Telegraph async
bot.use(noWait)
// Check time
bot.use(checkTime)
// Add chat to context
bot.use(attachUser)
// Check if restricted
bot.use(checkRestrict)
// Check if channel links are present
bot.use(checkNoChannelLinks)
// Setup message saver
bot.use(messageSaver)
// Commands
setupHelp(bot)
setupLanguage(bot)
setupCaptcha(bot)
setupTimeLimit(bot)
setupLock(bot)
setupRestrict(bot)
setupNoChannelLinks(bot)
setupDeleteEntryMessages(bot)
setupGreeting(bot)
setupTrust(bot)
setupStrict(bot)
setupCaptchaMessage(bot)
setupTestLocales(bot)
setupDeleteGreetingTime(bot)
setupBanUsers(bot)
setupDeleteEntryOnKick(bot)
setupCAS(bot)
setupBan(bot)
setupUnderAttack(bot)
setupNoAttack(bot)
setupViewConfig(bot)
setupButtonText(bot)
setupAllowInvitingBots(bot)
setupAdmin(bot)
setupGreetingButtons(bot)
// Newcomers logic
setupNewcomers(bot)

//Report
setupReport(bot)
setupReport2(bot)
setupReport_test(bot)

// Rules
setupRules(bot)

setupTelegram(bot)

// Catch
bot.catch(console.log)
=======
import { Context } from 'telegraf'
import { report } from '@helpers/report'
import { bot } from '@helpers/bot'
import { isMaster, fork } from 'cluster'
import { cpus } from 'os'

// Generate cluster workers
const workers = []
if (isMaster) {
  console.info(`Master ${process.pid} is running`)
  for (let i = 0; i < cpus().length; i += 1) {
    const worker = fork()
    workers.push(worker)
  }
} else {
  const handler = require('./updateHandler')
  console.info(`Worker ${process.pid} started`)
  process.on('message', (update) => {
    handler.handleUpdate(update)
  })
}
>>>>>>> 271878a5c2074fb57ad6f51f283785e34a83310c

// Start bot
if (isMaster) {
  bot.use((ctx) => {
    handleCtx(ctx)
  })
  bot
    .launch({
      polling: {
        allowedUpdates: [
          'callback_query',
          'chosen_inline_result',
          'edited_message',
          'inline_query',
          'message',
          'poll',
          'poll_answer',
          'chat_member',
        ] as any,
      },
    })
    .then(() => {
      console.info('Bot on the main thread is up and running')
    })
    .catch(report)
}

// Handle update
let clusterNumber = 0
function handleCtx(ctx: Context) {
  if (clusterNumber >= workers.length) {
    clusterNumber = 0
  }
  const worker = workers[clusterNumber]
  if (worker) {
    clusterNumber += 1
    worker.send(ctx.update)
  }
}
