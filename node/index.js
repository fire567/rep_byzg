const fs = require('fs');
const Cat = require('./cat.js');

const cat = new Cat();
cat.meow();

let content = '';
fs.readFile('./a.html', 'utf8', (err, a)=>  {
  content += a;
})
fs.readFile('./b.html', 'utf8', (err, b)=>  {
  content += b;
})
fs.writeFile('index.html', content, ()=> {})
