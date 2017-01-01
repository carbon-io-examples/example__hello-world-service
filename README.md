# Hello World Service

This example illustrates the use of Carbon.io to implement the simplest possible RESTful web service. 

# Installing the service

We encourage you to clone the git repository so you can play around
with the code. 

```
% git clone git@github.com:carbon-io/example__hello-world-service.git
% cd example__hello-world-service
% npm install
```

## Running the service

To run the service:

```sh
% node lib/HelloService
```

For cmdline help:

```sh
% node lib/HelloService -h
```

To access the ```/hello``` endpoint:

```
% curl localhost:888/hello
{ msg: "Hello world!" }
```

## Running the unit tests

This example comes with a simple unit test written in Carbon.io's test framework called TestTube. It is located in the ```test``` directory. 

```
% node test/HelloServiceTest
```

or 

```
% npm test
```

