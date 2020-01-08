# Truffle bug test

You might need `npm install @openzeppelin/test-helpers` first.

To run, do `truffle test`

This works as expected in truffle v5.1.4 and below: `npm install -g truffle@5.1.4`

It fails with 5.1.5 and later with this error:

```
  1) Contract: When testing contract, it:
       should detect a require fail:
     AssertionError: Expected an exception but none was received
      at expectException (node_modules/@openzeppelin/test-helpers/src/expectRevert.js:25:10)
      at processTicksAndRejections (internal/process/task_queues.js:97:5)
      at expectRevert (node_modules/@openzeppelin/test-helpers/src/expectRevert.js:74:3)
      at Context.<anonymous> (test/test.js:9:9)
```
