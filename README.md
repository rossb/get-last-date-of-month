# get-last-date-of-month

Takes a Date object and returns a Date object for the last day of its month. The date object returned is set to midnight local time.

## Install

```sh
$ npm install get-last-date-of-month --save
```

## Usage

```js
const GetLastDateOfMonth = require('get-last-date-of-month');

let endOfMonth = GetLastDateOfMonth( new Date() );
// Date object representing the last day of the current month
```
