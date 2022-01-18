const counter = document.createElement('h1');
counter.setAttribute('id', 'counter');
counter.innerHTML = '0';
document.body.append(counter);


const div = document.createElement('div');
div.className = 'container';
document.body.append(div);



const minus = createButton('-');
const plus = createButton('+');



function createButton(operator) {
  
  const btn = document.createElement('button');
  
    btn.innerHTML = operator;
    btn.setAttribute('id', operator);
    btn.setAttribute('data-value', operator);
    div.append(btn);

    
  btn.addEventListener ('mousedown', () => {
      
      let identifier = btn.attributes["data-value"].value;
      let value = counter.innerHTML;
      
      let count = {
          '+': +1,
          '-': -1,
      };
      
      let result = parseInt(value)+count[identifier];
      
      document.getElementById('counter').innerHTML = result;
  
  })

} 