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
const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number((range.value - range.min)),
      newPosition = 40 - (newValue * 0.8);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);