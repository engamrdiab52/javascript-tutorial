const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
// fs.re
console.log('START......');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first );
// console.log(second);
writeFileSync('./content/result-sync.txt',`there is the result: ${first}, ${second}`,{flag: 'a'})

console.log('done with this sync task ');
console.log('starting the next one ');