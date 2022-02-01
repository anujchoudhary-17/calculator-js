import {sum} from "./calc"


test("Adding 2+3 will return 5",() => {
    expect(sum(2, 3)).toBe(5);
})
