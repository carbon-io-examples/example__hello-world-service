# Hello Service

[![Build Status](https://img.shields.io/travis/carbon-io-examples/example__hello-world-service/master.svg?style=flat-square)](https://travis-ci.org/carbon-io-examples/example__hello-world-service) ![Carbon Version](https://img.shields.io/badge/carbon--io-0.7-blue.svg?style=flat-square)



This example illustrates the use of Carbon.io to implement the
simplest possible RESTful web service.

The code defining the service is located in ```lib/HelloService.js```
and uses a simple ```Endpoint``` object to implement an HTTP ```GET```
at the path ```/hello```:

```javascript
__(function() {
  module.exports = o({
    _type: carbon.carbond.Service,
    port: 8888,
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
```

## Installing the service

We encourage you to clone the git repository so you can play around
with the code. 

```
$ git clone -b carbon-0.7 git@github.com:carbon-io-examples/example__hello-world-service.git
$ cd example__hello-world-service
$ npm install
```

## Running the service

To run the service:

```sh
$ node lib/HelloService
```

For cmdline help:

```sh
$ node lib/HelloService -h
```

To access the ```/hello``` endpoint:

```sh
$ curl localhost:8888/hello
{ msg: "Hello world!" }
```

## Running the unit tests

This example comes with a simple unit test written in Carbon.io's test framework called TestTube. It is located in the ```test``` directory. 

```sh
$ node test/HelloServiceTest
```

or 

```sh
$ npm test
```

## Generating API documentation (aglio flavor)

To generate documentation using aglio, install it as a devDependency:

```
$ npm install -D --no-optional aglio
```

Using `--no-optional` speeds up aglio's install time significantly. Then generate the docs using this command:

```sh
$ node lib/HelloService gen-static-docs --flavor aglio --out docs/index.html
```

* [View current documentation](
http://htmlpreview.github.io/?https://raw.githubusercontent.com/carbon-io-examples/example__hello-world-service/blob/carbon-0.7/docs/index.html)
