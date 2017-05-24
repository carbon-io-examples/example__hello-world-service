var carbon = require('carbon-io')
var __     = carbon.fibers.__(module)
var _o     = carbon.bond._o(module)
var o      = carbon.atom.o(module).main

/***************************************************************************************************
 * HelloServiceTest
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
    name: "HelloServiceTest",

    /***************************************************************************
     * service
     */
    service: _o('../lib/HelloService'),
  
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
