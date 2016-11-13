var carbon = require('carbon-io')
var o      = carbon.atom.o(module).main
var __     = carbon.fibers.__(module).main

/***************************************************************************************************
 * Service
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
     * description
     */        
    description: "This is a very simple service.",
    
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
