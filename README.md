# Hello World Service

This example illustrates the use of Carbon.io to implement the simplest possible RESTful web service. 

# Installing the service

```
% npm install
```

## Running the service

To run the service:

```sh
% node lib/HelloWorldService
[Sat Dec 31 2016 22:12:16 GMT-0800 (PST)] INFO: Service starting...
[Sat Dec 31 2016 22:12:16 GMT-0800 (PST)] INFO: Service creating http server
[Sat Dec 31 2016 22:12:16 GMT-0800 (PST)] INFO: Service listening on port 8888
[Sat Dec 31 2016 22:12:16 GMT-0800 (PST)] INFO: Service started
```

For cmdline help:

```sh
% node lib/HelloWorldService -h
```

To access the ```/hello``` endpoint:

```
% curl localhost:888/hello
{ msg: "Hello world!" }
```

## Running the unit tests

This example comes with a simple unit test written in Carbon.io's test framework called TestTube. It is located in the ```test``` directory. 

```
% node test/HelloWorldServiceTest
Running HelloWorldServiceTest...
  [*] GET /hello (40ms)
  [*] HelloWorldServiceTest (40ms)

Test Report
[*] Test: HelloWorldServiceTest (40ms)
  [*] Test: GET /hello (40ms)
```

or 

```
% npm test
```

