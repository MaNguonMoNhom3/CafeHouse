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

let count = document.getElementById("count-pro-cart");
let getData = JSON.parse(sessionStorage.getItem('cart')) || [];
count.innerHTML = CountProduct(getData);
function CountProduct(data){
  let countProduct = 0;
  data.map(item => {
    countProduct += item.quantity;
  });
  return countProduct;
}
function loadCart(){
  const cart = document.getElementById("form-cart");
  let data = JSON.parse(sessionStorage.getItem('cart')) || [];
  count.innerHTML = CountProduct(data);
  let str = str2 = "";
  let total = 0;
  let vat = 0;
  data.map(item => {
    let percentArr = [0,25,50,75,100];
    let sizeArr = ['S', 'M', 'L'];
    let percent = "";
    let size = "";
    percentArr.map(i => {
      if(i === item.percentSugar)
        percent += `<option value="${i}" selected>${i}%</option>`;
      else percent += `<option value="${i}">${i}%</option>`;
    });
    sizeArr.map(i => {
      if(i === item.size)
        size += `<option value="${i}" selected>${i}</option>`;
      else size += `<option value="${i}">${i}</option>`;
    });
    total += Number(item.quantity) * Number(item.price);
    if(total > 0) vat = 30;
    str += `
    <tr>
              <td style = "display:inline"><img style = "margin-top:-10px" src="../frontend/img/${item.img}" /> </td>
              <td style = "width: 50px;"><div style = "width: 100px; height: 20px; overflow: hidden;">${item.name}</div></td>
              <td style="width: 150px;">
                <div class="quantity-btn" style="transform: scale(.8);">
                  <input type="button" value="-" class="arrow" onclick="minus('${item.id + item.percentSugar}')" />
                  <input class="form-control" type="number" id="${item.id + item.percentSugar}" value="${Number(item.quantity)}" min="1" max="99"
                    onkeyup="this.value=this.value.replace(/[^0-9]./g,'');" />
                  <input type="button" value="+" class="arrow" onclick="plus('${item.id + item.percentSugar}')"/>
                </div>
              </td>
              <td >
                <select class="form-select form-select-lg mb-3" onchange="saveProductSess(event,2)" aria-label=".form-select-lg example" style="width: 50px;margin-top:10px;">
                  ${size}
                </select>
              </td>
              <td >
                <select class="form-select form-select-lg mb-3" onchange="saveProductSess(event,3)" aria-label=".form-select-lg example" style="margin-top:10px;">
                  ${percent}
                </select>
              </td>
              <td class="text-right">${item.price} VNĐ</td>
              <td class="text-right" style="display: inline; float: right;">
                <button class="btn btn-sm btn-danger outline" style="margin-top:15px;" onclick="removeProduct('${item.id}','${item.percentSugar}', '${item.size}')"><i class="fa fa-trash"></i></button> 
              </td>
            </tr>`;
  });
  str = `<tr><td colspan="7"><div id="tbl-list-cart">
  <table >
    ${str}
  </table></div></td></tr>`
  str += `<tr>
          <td colspan="6">Tổng tiền sản phẩm</td>
          <td class="text-right">${total} VNĐ</td>
          </tr>
          <tr>
          <td colspan="5">VAT</td>
          <td colspan="2" class="text-right">${vat} VNĐ</td>
          </tr>
          <tr>
          <td colspan="5"><strong>Tổng tiền</strong></td>
          <td colspan="2" class="text-right"><strong>${total + vat} VNĐ</strong></td>
          </tr>`;
  cart.innerHTML = str;
}
function removeProduct(id, sugar, size){
  const data = JSON.parse(sessionStorage.getItem("cart")) || [];
  data.map((item,index) => {
    if(item.id === id && item.size === size && item.percentSugar === Number(sugar)){
      let remo = data.splice(index,1);
    }
  });
  sessionStorage.setItem("cart", JSON.stringify(data));
  loadCart();
}
function saveProductSess(event,sub){
  console.log(event.target.value)
}