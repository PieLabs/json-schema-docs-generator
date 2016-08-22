#!/usr/bin/env node

var start = new Date();
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
var debug = parseInt(args.debug, 0); // Pass in debug level via cli --debug=[1-4]
var Docs = require('../../index');

var schemaDriver = new Docs.SchemaDriver(['schemas/**/*.json'], undefined, {
  debugLevel: debug
});

schemaDriver.fetch()
  .then((schema) => {
    console.log('schema: ', JSON.stringify(schema, null, '  '));
  })
// var templateDriver = new Docs.TemplateDriver(['templates/*.handlebars'], {
//   debugLevel: debug
// });
// var composer = new Docs.Composer(schemaDriver, templateDriver, {
//   destination: 'dist',
//   pages: [{
//     file: 'index.html',
//     title: 'ttt',
//     sections: [{
//       title: 'section title',
//       description: 'section description',
//       schemas: [
//         '/cart-item'
//       ]
//     }]
//   }]
// });

// composer.build()
//   .bind(composer)
//   .then(composer.write)
//   .then(function() {
//     var end = new Date();
//     global.console.log('Build time: %s seconds', (end.getTime() - start.getTime())/1000);
//   })
//   .catch(function(err) {
//     global.console.log(err.message);
//     global.console.log(err.stack);
//   });
