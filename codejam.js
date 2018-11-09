/*
This is an attempt at solving the Google Code Jam Problem C located at
https://code.google.com/codejam/contest/90101/dashboard#s=p2
 */

const SAMPLE_INPUT = [
  '3',
  'elcomew elcome to code jam',
  'wweellccoommee to code qps jam',
  'welcome to codejam'
]

function getInput() {
  // TODO: Add I/O support to get the real input
  return SAMPLE_INPUT
}

function createOutput(output) {
  // TODO: Add I/O support to output in the correct manner
  console.log(output)
}

function run() {
  const input = getInput()
  const output = executeSolution(input)
  return createOutput(output)
}

function executeSolution(input) {
  return input
}

run()
