var seneca = require('seneca')();

seneca.add({
    cmd: 'salestax'
  },
  function (msg, respond) {
    var rate = msg.hasOwnProperty('rate') ? msg.rate : 20;
    var total = msg.net + (msg.net * rate / 100)
    respond(null, {answer: total})
  });


seneca.add({
    cmd: 'salestax',
    country: 'US'
  },
  function (msg, respond) {
    seneca.act({
        cmd: 'salestax',
        net: msg.net,
        rate: 50
      },
      respond)
  });


seneca.act({
    cmd: 'salestax',
    net: 100
  },
  function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });

seneca.act({
    cmd: 'salestax',
    net: 100,
    country: 'US'
  },
  function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });