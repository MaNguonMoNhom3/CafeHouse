function plus(id, sugar) {
  let current = Number(document.getElementById(id + sugar).value);
  let quantity = 0;
  let data = JSON.parse(sessionStorage.getItem('cart'));
  data.map(item => {
    if (item.id == id && item.percentSugar == sugar) {
      quantity = Number(item.total);
      if (quantity === 0) {
        document.getElementById(id + sugar).value = quantity;
        item.quantity = quantity;
      } else {
        if (current < quantity) {
          current += 1;
          document.getElementById(id + sugar).value = current;
          item.quantity = current;
        }
        if (current >= quantity) {
          document.getElementById(id + sugar).value = quantity;
          item.quantity = quantity;
        }
      }
    }

  })
  sessionStorage.setItem("cart", JSON.stringify(data));
  loadCart();
}
function minus(id, sugar) {
  let current = Number(document.getElementById(id + sugar).value);
  let quantity = 0;
  let data = JSON.parse(sessionStorage.getItem('cart'));
  data.map(item => {
    if (item.id === id && Number(item.percentSugar) === Number(sugar)) {
      quantity = Number(item.total);
      if (quantity === 0) {
        document.getElementById(id + sugar).value = quantity;
        item.quantity = quantity;
      } else {
        if (current > 0) {
          current -= 1;
          document.getElementById(id + sugar).value = current;
          item.quantity = current;
        }
        if (current <= 0) {
          document.getElementById(id + sugar).value = 1;
          item.quantity = 1;
        }
      }
    }

  })
  sessionStorage.setItem("cart", JSON.stringify(data));
  loadCart();
}
function plusDetail(id) {
  var current = document.getElementById(id).value;
  var quantity = Number(document.getElementById("product-quantity").value);
  if (quantity === 0) {
    document.getElementById(id).value = quantity;
  } else {
    if (current < quantity) {
      current = Number(current) + 1;
      document.getElementById(id).value = current;
    }
    if (current >= quantity) {
      document.getElementById(id).value = quantity;
    }
  }
}
function minusDetail(id) {
  var current = document.getElementById(id).value;
  var quantity = Number(document.getElementById("product-quantity").value);
  if (quantity === 0) {
    document.getElementById(id).value = quantity;
  } else {
    if (current > 0) {
      current = Number(current) - 1;
      document.getElementById(id).value = current;
    }
    if (current <= 0) {
      document.getElementById(id).value = 1;
    }
  }

}
//
//add product to cart
function addToCart(id, discount, total, img) {
  try {
    const data = JSON.parse(sessionStorage.getItem('cart')) || [];
    const name = document.getElementById("name").innerHTML.trim();
    const size = document.getElementById("size").value;
    const quantity = Number(document.getElementById("sp1").value);
    const radioSugar = document.getElementsByName('sugar');
    let percentSugar;
    for (let i = 0; i < radioSugar.length; i++)
      if (radioSugar[i].checked)
        percentSugar = Number(radioSugar[i].value);
    let check = true;
    if (quantity <= 0) alert("Lỗi số lượng vui lòng kiểm tra lại!")
    else alert("Thêm vào giỏ hàng thành công!");
    data.map((item, index) => {
      if (item.id === id && item.size === size && item.percentSugar === percentSugar && quantity > 0 && total > 0) {
        item.quantity += quantity;
        check = false;
      }
    })
    if (check && quantity > 0 && total > 0) {
      data.push({ id: id, name: name, img: img, price: discount, size: size, quantity: quantity, total: total, percentSugar: percentSugar });
    }
    sessionStorage.setItem('cart', JSON.stringify(data));
    loadCart();
  } catch (error) {
    alert("Lỗi xin kiểm tra lại!");
    sessionStorage.removeItem("cart");
  }
}
//
//get list product for cart
let str2 = "";
let getData = JSON.parse(sessionStorage.getItem('cart')) || [];
function CountProduct(data) {
  let countProduct = 0;
  data.map(item => {
    countProduct += item.quantity;
  });
  return countProduct;
}
const loadCart = () => {
  let count = document.getElementById("count-pro-cart") || "";
  const cart = document.getElementById("form-cart-popups") || "";
  let data = JSON.parse(sessionStorage.getItem('cart')) || [];
  count.innerHTML = CountProduct(data);
  let str = "";
  str2 = "";
  let total = 0;
  let vat = 0;
  data.map(item => {
    let percentArr = [0, 25, 50, 75, 100];
    let sizeArr = ['S', 'M', 'L'];
    let percent = "";
    let size = "";
    percentArr.map(i => {
      if (i === Number(item.percentSugar))
        percent += `<option value="${i}" selected>${i}%</option>`;
      else percent += `<option value="${i}">${i}%</option>`;
    });
    sizeArr.map(i => {
      if (i === item.size)
        size += `<option value="${i}" selected>${i}</option>`;
      else size += `<option value="${i}">${i}</option>`;
    });
    total += Number(item.quantity) * Number(item.price);
    if (total > 0) vat = 1.5;
    str += `
    <tr>
              <td><img style = "margin-top:-10px;padding: 1px;height:50px;" src="../frontend/img/${item.img}" /> </td>
              <td style = "width: 50px;"><div style = "width: 100px; height: 20px; overflow: hidden;">${item.name}</div></td>
              <td style="width: 150px;">
                <div class="quantity-btn" style="transform: scale(.8);font-size: 1.3em;">
                  <input type="button" value="-" class="arrow" onclick="minus('${item.id}', '${item.percentSugar}')" />
                  <input class="form-control" type="number" id="${item.id + item.percentSugar}" value="${Number(item.quantity)}" min="1" max="99"
                    onkeyup="this.value=this.value.replace(/[^0-9]./g,'');" />
                  <input type="button" value="+" class="arrow" onclick="plus('${item.id}', '${item.percentSugar}')"/>
                </div>
              </td>
              <td >
                <select class="form-select form-select-lg mb-3" onchange="saveProductSess(event, 1, '${item.id}', '${item.percentSugar}')" aria-label=".form-select-lg example" style="width: 50px;margin-top:10px;">
                  ${size}
                </select>
              </td>
              <td >
                <select class="form-select form-select-lg mb-3" onchange="saveProductSess(event, 2, '${item.id}', '${item.percentSugar}')" aria-label=".form-select-lg example" style="margin-top:10px;">
                  ${percent}
                </select>
              </td>
              <td class="text-right">${item.price} $</td>
              <td class="text-right" >
                <button class="btn btn-sm btn-danger outline" style="margin-top:0px;" onclick="removeProduct('${item.id}','${item.percentSugar}', '${item.size}')"><i class="fa fa-trash"></i></button> 
              </td>
            </tr>`;
  });
  str2 += str;
  str = `<tr><td colspan="7"><div id="tbl-list-cart">
  <table >
    ${str}
  </table></div></td></tr>`
  str += `<tr>
          <td colspan="5">Tổng tiền sản phẩm</td>
          <td class="text-right" colspan="2">${total} $</td>
          </tr>
          <tr>
          <td colspan="5">VAT</td>
          <td colspan="2" class="text-right">${vat} $</td>
          </tr>
          <tr>
          <td colspan="5"><strong>Tổng tiền</strong></td>
          <td colspan="2" class="text-right"><strong>${total + vat} $</strong></td>
          </tr>`;
  str2 += `<tr>
          <td colspan="5">Tổng tiền sản phẩm</td>
          <td class="text-right" colspan="2">${total} $</td>
          </tr>
          <tr>
          <td colspan="5">VAT</td>
          <td colspan="2" class="text-right">${vat} $</td>
          </tr>
          <tr>
          <td colspan="5"><strong>Tổng tiền</strong></td>
          <td colspan="2" class="text-right"><strong>${total + vat} $</strong></td>
          </tr>`;
  if (cart !== "")
    cart.innerHTML = str;
  return str2;
}
function removeProduct(id, sugar, size) {
  const data = JSON.parse(sessionStorage.getItem("cart")) || [];
  data.map((item, index) => {
    if (item.id === id && item.size === size && Number(item.percentSugar) === Number(sugar)) {
      let remo = data.splice(index, 1);
    }
  });
  sessionStorage.setItem("cart", JSON.stringify(data));
  let str = loadCart();
  document.getElementById("form-cart").innerHTML = str;
}

function saveProductSess(event, sub, id, sugar) {
  let data = JSON.parse(sessionStorage.getItem('cart')) || [];
  data.map(item => {
    if (item.id == id && item.percentSugar == Number(sugar)) {
      switch (sub) {
        case 1:
          item.size = event.target.value;
          break;
        case 2:
          item.percentSugar = Number(event.target.value);
          break;
      }
    }
  });
  for (let i = 0; i < data.length; i++) {
    for (let j = data.length - 1; j > i; j--) {
      if (data[i].id == data[j].id && data[i].percentSugar == data[j].percentSugar && data[i].size == data[j].size) {
        data[i].quantity += data[j].quantity;
        let remove = data.splice(j, 1);
      }
    }
  }
  sessionStorage.setItem("cart", JSON.stringify(data));
  document.getElementById("form-cart").innerHTML = loadCart();
}
//load 
window.onload = function () {
  if ($("#popups-cart").length > 0) {
    $(".cart").click(function () {
      $("#popups-cart").fadeToggle();
    });
    $(".dash-popups").click(function () {
      $("#popups-cart").fadeOut();
    });
  }
  if ($("#form-cart").length > 0)
    document.getElementById("form-cart").innerHTML = loadCart();
  totalCheckout();
  checkTotalCart();
};
function totalCheckout() {
  let data = JSON.parse(sessionStorage.getItem('cart')) || [];
  let quantity = 0;
  let total = vat = 0;
  data.map(item => {
    quantity += Number(item.quantity);
    total += Number(item.quantity) * Number(item.price);
  });
  if (total !== 0) vat = 1.5;
  let str = `<div id="title-checkout-order">
              <h4>Thông tin đơn hàng</h4>
            </div>
            <div class="amount-item horizontal-line">
              <div>Tạm tính (${quantity} sản phẩm)</div>
              <div>${total} $</div>
            </div>
            <div class="amount-item horizontal-line">
              <div>VAT</div>
              <div>${quantity ? vat : 0} $</div>
            </div>
            <div class="amount-item horizontal-line">
              <div>Tổng cộng</div>
              <div><input type="number" name="total" readonly value="${total + vat}"/>$</div>
            </div>`;
  if ($("#total-checkout").length > 0)
    document.getElementById("total-checkout").innerHTML = str;
}
function removeSession() {
  let data = sessionStorage.getItem('cart') || [];
  document.getElementById('checkout-order-detail').value = data;
  sessionStorage.removeItem('cart');
}
function successOrder() {
  alert("Đặt hàng thành công!");
}
function reqAddToCart() {
  alert("Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng!");
}
function checkTotalCart() {
  let data = sessionStorage.getItem('cart') || [];
  if ($("#checkTotalProduct").length > 0 && data.length === 0)
    document.getElementById("checkTotalProduct").innerHTML = `<button class="btn btn-lg btn-block btn-success text-uppercase outline" onclick="reqAddToCart()">Thanh toán</button>`;
}