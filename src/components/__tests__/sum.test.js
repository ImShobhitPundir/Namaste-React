
import { sum } from "../Sum";

test("Check Sum of 2 Positive Numbers",()=>{
    expect(sum(2,3)).toBe(5);
})

/*
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(sum(a,b)).not.toBe(0);
      }
    }
  });

  */