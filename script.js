var website, link;


website = ['Amazon', 'Ebay', 'Littlewoods', 'Debenhams'];
link = ['https://www.amazon.co.uk/', 'https://www.ebay.co.uk/', 'https://www.littlewoods.com/', 'https://www.debenhams.com/'];
while (!!website.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", link.shift());
  new_a.innerText = website.shift();

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}
