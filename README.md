# 🚀 Time age

A time formatting function to show how long it has been since inputted time

## How to use

To install, run

```bash
yarn add time-age
```

or

```bash
npm install time-age
```

The function takes a single parameter of type `number | string | Date`

```ts
import timeAge from "time-age"

/* String type example */
timeAge(new Date()) // Just now
timeAge("2021-07-20T22:55:08.109+00:00") // 13 hours ago
/* Number type example */
timeAge(Date.now()) // Just now
timeAge(Date.now()-4000) // 4 seconds ago
```

```js
const timeAge = require('time-age').default

/* String type example */
timeAge(new Date()) // Just now
timeAge("2021-07-20T22:55:08.109+00:00") // 13 hours ago
/* Number type example */
timeAge(Date.now()) // Just now
timeAge(Date.now()-4000) // 4 seconds ago

```
