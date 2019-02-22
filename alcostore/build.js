const fs = require('fs');

!fs.existsSync('dist') && fs.mkdirSync('dist');

const wrapTemplate = (name, content)=>{
  return `<script id="${name}Tmpl" type="text/x-jquery-tmpl">${content}</script>`
};

let content = '';
fs.readFile('./src/index.html', 'utf8', (err, index)=>  {
  content += index;
  fs.readFile('./src/pages/home.html', 'utf8', (err, home)=> {
    content += wrapTemplate('home', home);
    fs.readFile('./src/pages/glintwain.html', 'utf8', (err, glintwain)=> {
      content += wrapTemplate('glintwain', glintwain);
      fs.readFile('./src/pages/vermut.html', 'utf8', (err, vermut)=> {
        content += wrapTemplate('vermut', vermut);
        fs.writeFile('dist/index.html', content, ()=>{});
      })
    })
  })
});



// <script id="glintwainTmpl" type="text/x-jquery-tmpl">
//
//   </script>