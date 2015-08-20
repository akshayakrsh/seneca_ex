var seneca = require('seneca')();

seneca.add({
    cmd:'salestax'
  }, 
  function( msg, respond ) {
    var total = msg.net + (msg.net * 20/100) 
    respond( null, { answer: total } )
  });

seneca.act( 
  {cmd:'salestax', net: 100}, 
  function( err, result ) {
    if( err ) return console.error( err )
    console.log( result )
  })
