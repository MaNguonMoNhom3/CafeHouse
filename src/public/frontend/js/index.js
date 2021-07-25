function plus(id) {
  var current = document.getElementById(id).value;
  var quantity = Number(document.getElementById("product-quantity").value);
  if(quantity===0){
    document.getElementById(id).value = quantity;
  }else {
    if (current < quantity) {
      current = Number(current) + 1;
      document.getElementById(id).value = current;
    }
    if (current >= quantity) {
      document.getElementById(id).value = quantity;
    }
  }
}
function minus(id) {
  var current = document.getElementById(id).value;
  var quantity = Number(document.getElementById("product-quantity").value);
  if(quantity===0){
    document.getElementById(id).value = quantity;
  }else{
    if (current > 0) {
      current = Number(current) - 1;
      document.getElementById(id).value = current;
    }
    if (current <= 0) {
      document.getElementById(id).value = 1;
    }
  }
  
}
window.onload = function () {
  $(".cart").click(function () {
    $("#popups-cart").fadeToggle();
  });
  $(".dash-popups").click(function () {
    $("#popups-cart").fadeOut();
  });
};
//
//add product to cart
function addToCart(id, discount,img){
  const data = JSON.parse(window.localStorage.getItem('cart')) || [];
  const name = document.getElementById("name").innerHTML.trim();
  const size = document.getElementById("size").value;
  const quantity = Number(document.getElementById("sp1").value);
  const radioSugar = document.getElementsByName('sugar');
  let percentSugar;
  for (let i = 0; i < radioSugar.length; i++)
    if (radioSugar[i].checked)
      percentSugar = Number(radioSugar[i].value);
  let check = true;
  data.map((item,index) => {
    if(item.id === id && item.size === size && item.percentSugar === percentSugar){
      item.quantity = item.quantity + quantity;
      check = false;
    }
  })
  if(check)
    data.push({id: id, name: name, img: img, price: discount, size: size, quantity: quantity, percentSugar: percentSugar});
  window.localStorage.setItem('cart', JSON.stringify(data));  
}