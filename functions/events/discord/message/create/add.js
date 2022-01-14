const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// creates container which will contain goals on discord
let my_goal = context.params.event.content.replace('!add-goal','');

// connects to google sheet
await lib.googlesheets.query['@0.3.0'].insert({
  range: `List!A:B`,
  fieldsets: [
    {
      'Name': `${context.params.event.author.username}`,
      'Goal': `${my_goal}`
    }
  ]
});

return await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Your goal of ${my_goal} was added!`
});
