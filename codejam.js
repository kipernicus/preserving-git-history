/*
This is an attempt at solving the Google Code Jam Problem C located at
https://code.google.com/codejam/contest/90101/dashboard#s=p2
 */
const fs = require('fs')

const INPUTFILE = 'input.txt'
const OUTPUTFILE = 'output.txt'

function getInput() {
  const input = fs.readFileSync(`${__dirname}/${INPUTFILE}`, 'utf8')
  const lines = input.trim().split('\n')
  return lines
}

function createOutput(output) {
  fs.writeFileSync(`${__dirname}/${OUTPUTFILE}`, output.join('\n'))
}

function run() {
  const input = getInput()
  const output = executeSolution(input)
  return createOutput(output)
}

function executeSolution(input) {
  const output = []
  const testCaseCount = input[0] || 0
  for (let i = 1; i <= testCaseCount; i++) {
    const testCase = input[i]
    const count = findMatches(testCase)
    const formattedCount = formatCount(count)
    output.push(`Case #${i}: ${formattedCount}`)
  }
  return output
}

function findMatches(testCase) {
  const match = 'welcome to code jam'
  const potentialSolutions = ['']
  let count = 0
  for (let i = 0; i < testCase.length; i++) {
    const char = testCase[i]
    for (let j = 0; j < potentialSolutions.length; j++) {
      const partial = potentialSolutions[j] + char
      if(match.startsWith((partial))) {
        potentialSolutions.push(partial)
      }
    }
  }
  for (let i = 0; i < potentialSolutions.length; i++) {
    if (potentialSolutions[i] === match) {
      count++
    }
  }
  return count
}

function formatCount(count) {
  const smallCount = count % 10000
  if (smallCount < 10) {
    return `000${smallCount}`
  } else if (smallCount < 100) {
    return `00${smallCount}`
  } else if (smallCount < 1000) {
    return `0${smallCount}`
  } else {
    return smallCount
  }
}

run()
