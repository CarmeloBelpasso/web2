import './styles/style.css';
import Image1 from './assets/images/img1.jpg';
import Image2 from './assets/images/img2.jpg';
import Image3 from './assets/images/img3.jpg';
import Image4 from './assets/images/img4.jpg';
import Image5 from './assets/images/img5.jpg';
import Facebook from './assets/icons/facebook.png';
import Twitter from './assets/icons/twitter.png';
import Instagram from './assets/icons/instagram.png';
// import Left from './assets/icons/left.png';
// import Right from './assets/icons/right.png';

export const parOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget urna molestie, efficitur mi quis, lobortis sapien. Sed auctor porta massa, at luctus ante molestie non.';

export const parTwo = 'Vivamus malesuada est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.';

export const parThree = 'Sed auctor porta massa, at luctus ante molestie non. Vivamus malesua est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.';

export const parFour = 'Sed auctor porta massa, at luctus ante molestie non. Vivamus malesua est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.';

export const parFive = 'Phasellus bibendum sapien eu varius sodales. Donec molestie fringilla est, sed ornare turpis bibendum vel. Aliquam aliquet vehicula nulla, non cursus lorem tempus non. Etiam interdum vitae justo id scelerisque. Aliquam erat volutpat. Ut quis eros vitae mauris euismod sagittis ac rhoncus lacus. Cras lacinia vitae lectus vitae lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam metus neque, eleifend quis congue eu, placerat pellentesque mi. Sed lacus enim, eleifend nec ullamcorper nec, dictum pretium mi. Nulla interdum, dui a viverra eleifend, risus orci mollis lectus, sed rhoncus eros diam a velit. Ut pretium vestibulum tortor vitae malesuada. Aliquam molestie lacus vel enim fermentum mattis. Etiam sodales cursus est. Sed eleifend at enim ut auctor. Quisque non lectus urna.';

export const titleOne = document.createElement('h1');
titleOne.innerHTML = 'Eat Healthy<br>Stay Healthy';

export const titleTwo = document.createElement('h1');
titleTwo.innerHTML = 'Eat Your<br>Vegies';

export const titleThree = document.createElement('h1');
titleThree.innerHTML = 'Good Food<br>Good Mood';

export const titleFour = document.createElement('h1');
titleFour.innerHTML = 'Good Food<br>Good Mood';

export const titleFive = document.createElement('h1');
titleFive.innerHTML = 'Good Food<br>Good Mood';

export const buttons = document.getElementsByClassName('navLink');

export const readMe = document.createElement('a');
readMe.innerText = 'Read More';
readMe.href = '#';

// export const readMe2 = document.createElement('a');
// readMe2.innerText = 'Read More';
// readMe2.href = '#';
//
// export const readMe3 = document.createElement('a');
// readMe3.innerText = 'Read More';
// readMe3.href = '#';

export const imageOne = new Image();
imageOne.src = Image1;
imageOne.className = 'active';
imageOne.id = 'img';

export const imageTwo = new Image();
imageTwo.src = Image2;
imageTwo.id = 'img';

export const imageThree = new Image();
imageThree.src = Image3;
imageThree.id = 'img';

export const imageFour = new Image();
imageFour.src = Image4;
imageFour.id = 'img';

export const imageFive = new Image();
imageFive.src = Image5;
imageFive.id = 'img';

export const facebook = new Image();
facebook.src = Facebook;

export const twitter = new Image();
twitter.src = Twitter;

export const instagram = new Image();
instagram.src = Instagram;
