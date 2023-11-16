# Projects relate to DOM

##  project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-jhkjfb?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code 

## project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; // 'grey'
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; // 'white'
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; // 'blue'
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; // 'yellow'
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id; // 'purple'
    }
  });
});


```

## project 2
```javascript
const form = document.querySelector('form');
//this usecase will give u empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight';
  } else {
    const bmi = (weight)/ ((height*height)/10000).toFixed(2)
    //show the result 
    results.innerHTML =  `<span>${bmi}</span>`
  }

  //results.innerHTML = `${height}`;
});

```
## Project 3 solution code 

```javascript

const clock = document.getElementById('clock')
// const clock = document.getElementById('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
// having 2 params
```
