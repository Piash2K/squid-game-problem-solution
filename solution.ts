const reverseStr = (str: string): string => {
    return str.split("").reverse().join("");
}
// console.log(reverseStr("I am a good boy"))

const fizzbuzz = (n: number): string[] => {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

// console.log(fizzbuzz(35))

const largestNumber = (nums: number[]): number => {
    let largest = nums[0]; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }   

    }
    return largest;
}
// console.log(largestNumber([12, 44, 53, 25, 12, 29, 21,44,53]));