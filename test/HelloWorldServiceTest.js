var carbon = require('carbon-io')
var o      = carbon.atom.o(module).main
var _o     = carbon.bond._o(module)
var __     = carbon.fibers.__(module).main

/***************************************************************************************************
 * Test
 */
__(function() {
  module.exports = o({

    /***************************************************************************
     * _type
     */
    _type: carbon.carbond.test.ServiceTest,

    /***************************************************************************
     * name
     */
    name: "HelloWorldServiceTest",

    /***************************************************************************
     * service
     */
    service: _o('../lib/HelloWorldService'),
  
    /***************************************************************************
     * tests
     */
    tests: [
      // Test GET
      {
        reqSpec: {
          url: '/hello',
          method: "GET"
        },
        resSpec: {
          statusCode: 200,
          body: { msg: "Hello world!" }
        }
      }
    ]

  })
})
