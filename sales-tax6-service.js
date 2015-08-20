require('seneca')()
  .use('beanstalk-transport')
  .use('sales-tax-plugin')
  //.listen({type: 'redis'});
  .listen({type: 'beanstalk'});