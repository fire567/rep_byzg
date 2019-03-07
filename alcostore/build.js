const fs = require('fs');
const { transformFile } = require('@babel/core');

!fs.existsSync('dist') && fs.mkdirSync('dist');

const wrapTemplate = (name, content)=>{
  return `<script id="${name}Tmpl" type="text/x-jquery-tmpl">${content}</script>`
};

const defaultCallback = ()=> {};
const ENCODING = 'utf8';
const PATH = {
  _wrap(folder, relPath) {
    let path = `./${folder}`;
    if (relPath) path += `/${relPath}`;
    return path;
  },
  src(relPath) { return this._wrap('src', relPath) },
  dist(relPath) { return this._wrap('dist', relPath) },
  index() { return `${this.src()}/index.html` },
  page(name) { return `${this.src()}/pages/${name}` }
};

let htmlContent = fs.readFileSync(PATH.index(), ENCODING);
fs.readdir(PATH.src('pages'), function (err, files) {
  files.forEach(function (fileName, index) {
    const pageName = fileName.split('.')[0];
    const pageContent = fs.readFileSync(PATH.page(fileName), ENCODING);
    htmlContent += wrapTemplate(pageName, pageContent);
  });
  fs.writeFile(PATH.dist('index.html'), htmlContent, defaultCallback);
});

fs.copyFile(PATH.src('stylesheets.css'), PATH.dist('stylesheets.css'), defaultCallback);

// transformFile(PATH.src('scripts.js'), { presets: ['@babel/preset-env'] }, (error, result) => {
//   fs.writeFile(PATH.dist('bundle.js'), result.code, defaultCallback);
// });

