var story, image, pagenom;


story = ['So he told himself that it was probably sour and left. That night, he had to sleep on an empty stomach.', 'Moral of the Story:  Most of us have the tendency to act like the fox. When we want something but think it’s too hard to attain, we make up excuses.', 'We tell ourselves that it’s probably not that great instead of working hard for it.'];
image = ['https://images.unsplash.com/photo-1634521991558-a1f4dbd641db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1605942825243-acc2e4042b81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80', 'https://images.unsplash.com/photo-1540428562593-4d82f4083688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'];
pagenom = [1, 2, 3];


document.getElementById('next').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  image.push(image[0]);
  element_img.setAttribute("src", image.shift());
  let element_story = document.getElementById('story');
  story.push(story[0]);
  element_story.innerText = story.shift();
  let element_pagenom = document.getElementById('pagenom');
  pagenom.push(pagenom[0]);
  element_pagenom.innerText = pagenom.shift();

});

var images;


images = ['https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1859&q=80', 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80', 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80', 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];

let element_pics = document.getElementById('pics');
images.push(images[0]);
element_pics.setAttribute("src", images.shift());


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  images.unshift(images.slice(-1)[0]);
  element_pics2.setAttribute("src", images.pop());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  images.unshift(images.slice(-1)[0]);
  element_pics3.setAttribute("src", images.shift());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pics4 = document.getElementById('pics');
  images.push(images[0]);
  element_pics4.setAttribute("src", images.shift());

});
