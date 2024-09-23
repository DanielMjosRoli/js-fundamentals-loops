const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }
for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = 1; i <= 10; i++) {
  const line = []
  for (let j = 0; j < i; j++) {
    line.push(i)
  }
  nestedOne.push(line)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = 1; i <= 10; i++) {
  const line2 = []
  for (let j = i; j > 0; j--) {
    line2.push(j)
  }
  nestedTwo.push(line2)
}
// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let k = 1; k <= 10; k++) {
  const line2 = []
  for (let i = 1; i <= k; i++) {
    const line = []
    for (let j = 0; j < i; j++) {
      line.push(k)
    }
    line2.push(line)
  }
  deepOne.push(line2)
}
// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let k = 1; k <= 10; k++) {
  const line2 = []
  for (let i = 1; i <= k; i++) {
    const line = []
    for (let j = 1; j <= i; j++) {
      line.push(j)
    }
    line2.push(line)
  }
  deepTwo.push(line2)
}
// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let k = 1; k <= 10; k++) {
  const line2 = []
  for (let i = 1; i <= k; i++) {
    const line = []
    for (let j = 1; j <= i; j++) {
      line.push(j)
    }
    let sum = 0
    const line3 = []
    line.forEach((element) => {
      sum += element * element
    })
    line3.push(sum / line.length)
    line2.push(line3)
  }
  deepThree.push(line2)
}
module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
