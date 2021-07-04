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
// fetch('http://localhost:5500/categories/DB')
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     var menu = document.getElementById("side-menu");
//     categories = categories.concat(json);
//     json.map((item, index) => {
//       if (index === 0) {
//         onSubmit(item._id, 1);
//         menu.innerHTML += `<li ><a onClick="onSubmit('${item._id}', 1);activeCategory('${item._id}');" class="active" id="category${index}"> ${item.name} </a></li>`;
//       } else
//         menu.innerHTML += `<li ><a onClick="onSubmit('${item._id}', 1); activeCategory('${item._id}'); " id="category${index}" > ${item.name} </a></li>`;
//     })
//   })
//   .catch((error) => {
//     log('Request failed category', error)
//   });

// var currentpage = 1;
// function onSubmit(id, currentpage) {
//   fetch(`http://localhost:5500/products/ByCategory`,
//     {
//       method: 'POST',
//       headers: { id: id, page: currentpage }
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then(json => {
//       let listProducts = document.getElementById("listProducts");
//       let pagination = document.getElementById("pagination");
//       let strProducts = "";
//       pages = json.pages;
//       json.products.map((item, index) => {
//         strProducts +=
//           `<div class="tm-product">
//               <img src="frontend/img/${item.Image}" alt="${item.Name}">
//               <div class="tm-product-text">
//                 <h3 class="tm-product-title">${item.Name}</h3>
//                 <p class="tm-product-description">${item.Description}</p>
//               </div>
//               <div class="tm-product-price">
//                 <a href="#" class="tm-product-price-link tm-handwriting-font">
//                   <span class="tm-product-price-currency">$</span>${item.Price}
//                 </a>
//               </div>
//             </div>`
//       });
//       listProducts.innerHTML = strProducts;
//       loadPagination(id, pages, currentpage);
//     })
//     .catch((error) => {
//       console.log('Request failed products by cateogry', error)
//     });


// }
// function activeCategory(id) {
//   categories.map((item, index) => {
//     if (item._id === id) document.getElementById(`category${index}`).classList.add('active');
//     else document.getElementById(`category${index}`).classList.remove('active');
//   })
// }
// function loadPagination(id, pages, currentpage) {
//   let strPagination = "";
//   pages = Math.ceil(pages)
//   for (let i = 0; i < pages; i++) {
//     strPagination += `<li class="page-item ${(currentpage == (i + 1)) ? "active" : ""}"><a class="page-link" onClick="onSubmit('${id}', ${i + 1});">${i + 1}</a></li>`;
//   }
//   pagination.innerHTML = `<li class="page-item "><a class="page-link" onClick="onSubmit('${id}', ${(currentpage > 1) ? currentpage - 1 : currentpage});">Previous</a></li>
//     ${strPagination}
//     <li class="page-item"><a class="page-link" onClick="onSubmit('${id}', ${(currentpage < pages) ? currentpage + 1 : currentpage});">Next</a></li>`
// }
// //menu today + home
// function popularItemHome(id, count) {
//   fetch("http://localhost:5500/products/ByHot")
//     .then((res) => { return res.json(); })
//     .then(json => {
//       let str = "";
//       json.map((item, index) => {
//         if (index < count) {
//           str += popularItem(item);
//         }
//       });
//       document.getElementById(id).innerHTML = str;
//     })
//     .catch((error) => {
//       log('Request failed products hot', error)
//     });
// }

// function popularItemToday(productItems) {
//   document.getElementById("popular-items-today").innerHTML += productItems;
// }
// popularItemHome("popular-items-today", 6);
// popularItemHome("popular-items-home", 3);
// function popularItem(item) {
//   return (`<div class="tm-popular-item">
//     <div class="tm-popular-item-img-wrap">
//       <img src="frontend/img/${item.Image}" alt="${item.Name}" class="tm-popular-item-img">
//     </div>
//     <div class="tm-popular-item-description">
//       <h3 class="tm-handwriting-font tm-popular-item-title fontPacifico">
//         ${item.Name}
//       </h3>
//       <hr class="tm-popular-item-hr">
//       <p>${item.Description}</p>
//       <div class="order-now-container">
//         <a href="#" class="order-now-link tm-handwriting-font">Order Now</a>
//       </div>
//     </div>
//   </div>`);
// }