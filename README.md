# Hello World Service

This example illustrates the use of Carbon.io to implement the simplest possible RESTful web service. 

## Installing the service

```
% npm install
```

## Running the service

To run the service:

```
% node lib/HelloWorld
```

For cmdline help:

```
% node lib/HelloWorld -h
```

To access the ```/hello``` endpoint:

```
% curl localhost:888/hello
```

## Running the unit tests

This example comes with a simple unit test written in Carbon.io's test framework called TestTube. It is located in the ```test``` directory. 

```
% node test/Test
```

or 

```
% npm test
```

