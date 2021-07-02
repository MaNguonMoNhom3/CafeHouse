function plus(id) {
  var current = document.getElementById(id).value;
  if (current < 100) {
    current = Number(current) + 1;
    document.getElementById(id).value = current;
  }
  if (current >= 100) {
    document.getElementById(id).value = 99;
  }

}
function minus(id) {
  var current = document.getElementById(id).value;
  if (current > 0) {
    current = Number(current) - 1;
    document.getElementById(id).value = current;
  }
  if (current <= 0) {
    document.getElementById(id).value = 1;
  }

}
window.onload = function () {
  $(".cart").click(function () {
    $("#popups-cart").fadeToggle();
  });
  $(".dash-popups").click(function () {
    $("#popups-cart").fadeOut();
  });
}
var sliderIce = document.getElementById("optionIce") || null;
var sliderSugar = document.getElementById("optionSugar") || null;
var percentIce = document.getElementById("percent-ice") || null;
var percentSugar = document.getElementById("percent-sugar") || null;
var categories = [];

if (sliderIce !== null) {
  percentIce.innerHTML = sliderIce.value;
  sliderIce.oninput = function () {
    percentIce.innerHTML = this.value;
  }
}
if (sliderSugar !== null) {
  percentSugar.innerHTML = sliderSugar.value;
  sliderSugar.oninput = function () {
    percentSugar.innerHTML = this.value;
  }
}
fetch('http://localhost:5500/categories/DB')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    var menu = document.getElementById("side-menu");
    categories = categories.concat(json);
    json.map((item, index) => {
      if (index === 0) {
        onSubmit(item._id);
        menu.innerHTML += `<li ><a onClick="onSubmit('${item._id}');activeCategory('${item._id}'); " class="active" id="category${index}"> ${item.name} </a></li>`;
      } else
        menu.innerHTML += `<li ><a onClick="onSubmit('${item._id}'); activeCategory('${item._id}');" id="category${index}" > ${item.name} </a></li>`;
    })
    console.log('Request successful', json);
  })
  .catch((error) => {
    log('Request failed', error)
  });

// const options = {
//   method: 'POST',
//   body: JSON.stringify(params)
// };
// fetch('http://localhost:5500/products/menu-products', options)
//   .then((res) => {
//     return res.json();
//   })
//   .then(json => {
//     console.log(json);
//   })
//   .catch((error) => {
//     log('Request failed', error)
//   });
function onSubmit(id) {
  fetch(`http://localhost:5500/products/DB`,
    {
      method: 'POST',
      headers: { id: id }
    })
    .then((res) => {
      return res.json();
    })
    .then(json => {
      let listProducts = document.getElementById("listProducts");
      let string = "";
      json.map((item, index) => {
        string +=
          `<div class="tm-product">
        <img src="frontend/img/${item.Image}" alt="${item.Name}">
        <div class="tm-product-text">
          <h3 class="tm-product-title">${item.Name}</h3>
          <p class="tm-product-description">${item.Description}</p>
        </div>
        <div class="tm-product-price">
          <a href="#" class="tm-product-price-link tm-handwriting-font"><span
              class="tm-product-price-currency">$</span>${item.Price}</a>
        </div>`
      });
      listProducts.innerHTML = string;
    })
    .catch((error) => {
      console.log('Request failed', error)
    });
}
function activeCategory(id) {
  categories.map((item, index) => {
    if (item._id === id) document.getElementById(`category${index}`).classList.add('active');
    else document.getElementById(`category${index}`).classList.remove('active');
  })
}