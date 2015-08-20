var seneca = require('seneca')();
seneca.use('sales-tax-plugin');

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