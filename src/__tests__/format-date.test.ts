import { formatTime } from "../index"

test("Check how long it has been with `Date.now`", () => {
  expect(formatTime(Date.now())).toBe("Just now")
})

test("Check how long it has been with `new Date` Constructor", () => {
  expect(formatTime(new Date())).toBe("Just now")
})
