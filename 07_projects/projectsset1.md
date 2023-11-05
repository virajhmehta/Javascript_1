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