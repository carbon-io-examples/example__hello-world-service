var carbon = require('carbon-io')
var __     = carbon.fibers.__(module)
var o      = carbon.atom.o(module).main // Note the .main here since this is the main application 

/***************************************************************************************************
 * HelloService
 *
 * Hello-world example. 
 */
__(function() {
  module.exports = o({

    /***************************************************************************
     * _type
     */
    _type: carbon.carbond.Service,

    /***************************************************************************
     * port
     */
    port: 8888,

    /***************************************************************************
     * endpoints
     */
    endpoints : {
      hello: o({
        _type: carbon.carbond.Endpoint,
        
        get: function(req, res) {
          return { msg: "Hello world!" }
        }
      })
    }

  })
})
