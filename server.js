const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
app.use( express.static('./public') );
// app.get ('/new', function( request, response) {
//   response.sendFile('/public/index.html', {root: '.'});
//   console.log('after sendFile');
// });

app.listen(PORT, function() {
  console.log(`listening on ${PORT}` );
});
