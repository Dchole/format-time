import timeAge from "../index"

test("Check how long it has been with `Date.now`", () => {
  expect(timeAge(Date.now())).toBe("Just now")
})

test("Check how long it has been with `new Date` Constructor", () => {
  expect(timeAge(new Date())).toBe("Just now")
})

test("Check for 2 seconds ago", () => {
  expect(timeAge(Date.now() - 2000)).toBe("2 seconds ago")
})

test("Check how long it has been with Invalid date format", () => {
  expect(() => timeAge(new Date().toLocaleTimeString())).toThrowError(
    new TypeError(
      `Expected DateTime but got ${new Date().toLocaleTimeString()} instead.\nEx. timeAge(new Date()) or timeAge(Date.now())`
    )
  )
})
