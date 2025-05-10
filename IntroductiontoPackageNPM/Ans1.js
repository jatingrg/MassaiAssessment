const boxen = require('boxen');
console.log(boxen('helloworld'))
console.log(boxen('Iam using my first external module !',{title:'Hurray!!!',titleAlignment:'center'}))
console.log(boxen('Iam using my first external module !',{title:'Hurray!!!',titleAlignment:'center',borderStyle:'classic'}))
console.log(boxen('Iam using my first external module !',{title:'Hurray!!!',titleAlignment:'center',borderStyle:'round'}))
console.log(boxen('Iam using my first external module !',{title:'Hurray!!!',titleAlignment:'center',borderStyle:'singleDouble'}))
console.log(boxen('Iam using my first external module !',{title:'Hurray!!!',titleAlignment:'center',borderStyle:'round',borderColor:'green',backgroundColor:'yellow'}))
