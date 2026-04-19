const reverseStr = (str: string): string => {
  return str.split("").reverse().join("");
};
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
};

// console.log(fizzbuzz(35))

const largestNumber = (nums: number[]): number => {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
};
// console.log(largestNumber([12, 44, 53, 25, 12, 29, 21,44,53]));

const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
};
// console.log(isPalindrome("hello"));

const sumOfArray = (nums: number[]): number => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};
// console.log(sumOfArray([0]));

const countVowels = (str: string): number => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
// console.log(countVowels("Hello World"));

const factorial = (n: number): number => {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
// console.log(factorial(0));

const filterEvenNumbers = (nums: number[]): number[] => {
  return nums.filter((num) => num % 2 === 0);
};
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

const fibonacciSequence = (n: number): number[] => {
  if (n === 1) {
    return [0];
  }
  const sequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
};
// console.log(fibonacciSequence(10));

const findMinimum = (nums: number[]): number => {
  let minimum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minimum) {
      minimum = nums[i];
    }
  }
  return minimum;
};

// console.log(findMinimum([44, 53, 25, 12, 29, 21,44,53]));

const multiplicationTable = (n: number): string[] => {
  const result: string[] = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${n}x${i}= ${n * i}`);
  }
  return result;
};

// console.log(multiplicationTable(5))

const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(7))

const removeDuplicates = (nums: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
};

// console.log(removeDuplicates([1,2,2,3,4,4,5,6,7,7]))

const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};
// console.log(celsiusToFahrenheit(25))

const countCharacter = (str: string, char: string): number => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};
// console.log(countCharacter("hello","l"))
