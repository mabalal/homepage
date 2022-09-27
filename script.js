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
