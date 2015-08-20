var seneca = require('seneca')();

seneca.add({
    cmd: 'salestax'
  },
  function (msg, respond) {
    var rate = msg.hasOwnProperty('rate') ? msg.rate : 20;
    var total = msg.net + (msg.net * rate / 100);
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
        rate: msg.hasOwnProperty('rate') ? msg.rate : 25
      },
      respond)
  });

seneca.add({
    cmd: 'salestax',
    country: 'US',
    state: 'NY'
  },
  function (msg, respond) {
    seneca.act({
        cmd: 'salestax',
        country: msg.country,
        net: msg.net,
        rate: msg.hasOwnProperty('rate') ? msg.rate : 50
      },
      respond)
  });

seneca.add({
    cmd: 'salestax',
    country: 'US',
    state: 'NY',
    city: 'NYC'
  },
  function (msg, respond) {
    seneca.act({
        cmd: 'salestax',
        country: msg.country,
        state: msg.state,
        net: msg.net,
        rate: 70
      },
      respond)
  });

seneca.add({
    cmd: 'salestax',
    country: 'US',
    state: 'NY',
    county: 'Brooklyn'
  },
  function (msg, respond) {
    if(msg.hasOwnProperty('clothing_net'))
      msg.net -= msg.clothing_net;

    seneca.act({
        cmd: 'salestax',
        country: msg.country,
        state: msg.state,
        net: msg.net,
        rate: 70
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

seneca.act({
    cmd: 'salestax',
    net: 100,
    country: 'US',
    state: 'NY'
  },
  function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });

seneca.act({
    cmd: 'salestax',
    net: 100,
    country: 'US',
    state: 'NY',
    city: 'NYC'
  },
  function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });


seneca.act({
    cmd: 'salestax',
    net: 100,
    clothing_net: 20,
    country: 'US',
    state: 'NY',
    county: 'Brooklyn'
  },
  function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });