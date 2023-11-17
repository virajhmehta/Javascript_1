# Projects related to async and events

##  project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-jhkjfb?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code 

## Project 1 : Change Background Color

```javascript
// generate a random number
const randomColor = function () {
  const hex = '0123456789ABCDF';
  let color = '#';
  for (
    let i = 0;
    i < 6;
    i++ // hex have 5 dig
  ) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let internalId;
const startChangingColor = function () {
  if (!internalId) {
    internalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(internalId);
  internalId = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
## Project 2 : KeyBoard

```Javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class= 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  <div>
  `;
});

```