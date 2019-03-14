const reactContnent = React.createElement(
  'div', null , [
    React.createElement('div', {key: 1}, 'asd'),
    React.createElement('div', {key: 2}, 'asd'),
    React.createElement('div', {key: 3}, 'asd'),
    React.createElement('div', {key: 4}, 'asd'),
  ]

)

console.log(document.getElementById('root'))
ReactDOM.render(reactContnent, document.getElementById('root'));

