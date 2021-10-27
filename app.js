// 1.
const portillos = document.getElementById(`portillos`);
console.dir(portillos);
// 2.
const images = document.getElementsByTagName(`img`);
console.dir(images);
// 3.
const centered = document.getElementsByClassName(`center`);
console.dir(centered);
// 4.
const ginosEast = document.querySelector(`#ginos`);
console.dir(ginosEast);
// 5.
const pTags = document.querySelectorAll(`p`);
console.dir(pTags);
// 6a.
const h1 = document.querySelector(`.center`);
console.dir(h1);
// 6b.
console.log(h1.innerText);
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;
console.log(h1.innerText);
// 7a.
const others = document.querySelector(`#others`);
console.dir(others);
// 7b.
console.log(others.innerHTML);
others.innerHTML = `<h3>Other favorites</h3>`;
// 8.
const aTag = document.querySelector(`a`);
console.dir(aTag);
console.log(aTag.href);
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;
console.log(aTag.href);
// 9.
console.dir(h1);
console.log(h1.classList);
h1.classList.add(`background`);
h1.classList.add(`text-color`);
// 10.
    h1.classList.remove(`background`);
// 11a.
const h4 = document.createElement(`h4`);
// 11b.
h4.innerText = `CHICAGO: A great place to eat!`;
// 11c.
const body = document.querySelector(`body`);
body.prepend(h4);
// 12a.
const h5 = document.createElement(`h5`);
// 12b.
h5.innerText = `See you in the Windy City Sometime!`;
// 12c.
aTag.insertAdjacentElement(`afterend`, h5);
const jaysBeef = document.querySelector(`li`);
jaysBeef.remove();