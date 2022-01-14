const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


// connects to google sheet
// adds query
let data = await lib.googlesheets.query['@0.3.0'].select({
  range: `List!A:B`,
  bounds: 'FIRST_EMPTY_ROW',
  where: [
    {
      'Name__is': `${context.params.event.author.username}`
    }
  ],
  limit: {
    'count': 0,
    'offset': 0
  }
});

goals = []
for (let i = 0; i < data.rows.length; i++){
  
  // pushes data so discord can show
  goals.push([data.rows[i].fields.Goal])
}

return await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Your goals are: ${goals}`
});
