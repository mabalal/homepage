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






var shoppingList = angular.module("root", []);

shoppingList.controller("index", ["$scope", function ($scope){
  
  $scope.itemName;
  $scope.itemShop;
  $scope.itemQuantity;
  $scope.itemPrice;
  
  var success = document.getElementById('successMessage');
  var error = document.getElementById('errorMessage');
  
  $scope.selection = [];
  
  $scope.list = [
    {name: 'Milk', shop:'CVS', quantity: 1, price: 2.65, checked: true},
    {name: 'Bread', shop:'CVS', quantity: 1, price: 2.15, checked: true},
    {name: 'Eggs', shop:'CVS', quantity: 1, price: 1.75, checked: true},
    {name: 'Chow Mein', shop:'Trader Joes', quantity: 1, price: 3.10, checked: false},
    {name: 'Bacon', shop:'CVS', quantity: 1, price: 2.20, checked: false},
    {name: 'Yoghurt', shop:'Trader Joes', quantity: 6, price: 3.10, checked: false},
    {name: 'Chocolate', shop:'CVS', quantity: 6, price: 3.10, checked: false}
  ];
  
  
  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.list.length; i++){
        total += $scope.list[i].price;
    }
    return total;
  };
    
  $scope.inventory = [
    {name: 'Milk', shop:'CVS', quantity: 1, price: 2.65},
    {name: 'Bread', shop: 'CVS', quantity: 1, price: 2.15},
    {name: 'Eggs', shop: 'CVS', quantity: 1, price: 1.75},
  ];

  $scope.remove = function(item) { 
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1);     
  }
  
  $scope.removeInventory = function(item) { 
    var index = $scope.inventory.indexOf(item)
    $scope.inventory.splice(index, 1);     
  }
    
  $scope.clearAll = function(list){
  	var length = list.length;
     list.splice(0, length);
  };
    
    $scope.addItem = function() {
       if($scope.itemName && $scope.itemQuantity && $scope.itemPrice && $scope.itemShop){
	        $scope.list.push({name: $scope.itemName, shop: $scope.itemShop, quantity: $scope.itemQuantity, price: $scope.itemPrice * $scope.itemQuantity, checked: false});
	
	        $scope.itemName = '';
	        $scope.itemShop = '';
	        $scope.itemQuantity = '';
	        $scope.itemPrice = '';
	
	        success.style.display = 'block';
	        var timer = setTimeout(function(){
	          success.style.display = 'none';
	        }, 2000);
      }
    }
    
    $scope.add = function(item){
      var item = $scope.list.indexOf(item);
      $scope.inventory.push($scope.list[item]);
      $scope.list[item].checked = true;
    }
}]);
