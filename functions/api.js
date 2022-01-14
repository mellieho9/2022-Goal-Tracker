const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let data = await lib.googlesheets.query['@0.3.0'].select({
  range: `List!A:B`,
  bounds: 'FIRST_EMPTY_ROW',
  where: [{}],
  limit: {
    'count': 0,
    'offset': 0
  }
});

//creates array
goals = []

//iterates thru the array
for (let i =0; i<data.rows.length;i++){
  //adds information to the array
    goals.push({name: data.rows[i].fields.Name, goal: data.rows[i].fields.Goal});
    
}

return goals;
