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
    if(quantity <= 0) alert("Lỗi số lượng vui lòng kiểm tra lại!")
    else alert("Thêm vào giỏ hàng thành công!");
    data.map((item,index) => {
      if(item.id === id && item.size === size && item.percentSugar === percentSugar && quantity > 0){
        item.quantity += quantity;
        check = false;
      }
    })
    if(check && quantity > 0){
      data.push({id: id, name: name, img: img, price: discount, size: size, quantity: quantity, percentSugar: percentSugar});
    }
    sessionStorage.setItem('cart', JSON.stringify(data));  
  } catch (error) {
    alert("Lỗi xin kiểm tra lại!");
  }
}
//
//get list product for cart

const count = document.getElementById("count-pro-cart");
let getData = JSON.parse(sessionStorage.getItem('cart')) || [];
count.innerHTML = getData.length;
function loadCart(){
  const cart = document.getElementById("form-cart");
  let data = JSON.parse(sessionStorage.getItem('cart')) || [];
  count.innerHTML = data.length;
  let str = "";
  let percent = "";
  let total = 0;
  data.map(item => {
    let percentArr = [0,25,50,75,100];
    percentArr.map(i => {
      if(i === item.percentSugar)
        percent += `<option value="${i}" selected>${i}%</option>`;
      else percent += `<option value="${i}">${i}%</option>`;
    });
    total += Number(item.quantity) * Number(item.price);
    str += `<tr>
              <td><img src="../frontend/img/${item.img}" /> </td>
              <td>${item.name}</td>
              <td>
                <div class="quantity-btn">
                  <input type="button" value="-" class="arrow" onclick="minus('${item.id + item.percentSugar}')" />
                  <input class="form-control" type="number" id="${item.id + item.percentSugar}" value="${Number(item.quantity)}" min="1" max="99"
                    onkeyup="this.value=this.value.replace(/[^0-9]./g,'');" />
                  <input type="button" value="+" class="arrow" onclick="plus('${item.id + item.percentSugar}')" />
                </div>
              </td>
              <td >
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  ${percent}
                </select>
              </td>
              <td class="text-center">${item.price} VNĐ</td>
              <td class="text-right"><button class="btn btn-sm btn-danger outline"><i class="fa fa-trash"></i>
                </button> </td>
            </tr>`;
  });
  str += `<tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Tổng tiền sản phẩm</td>
          <td class="text-right">${total} VNĐ</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>VAT</td>
          <td class="text-right">30 VNĐ</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><strong>Tổng tiền</strong></td>
          <td class="text-right"><strong>${total + 30} VNĐ</strong></td>
          </tr>`;
  cart.innerHTML = str;
}
