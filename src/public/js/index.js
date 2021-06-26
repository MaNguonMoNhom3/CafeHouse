function plus(id){
    var current = document.getElementById(id).value;
    if(current<100){
        current = Number(current) + 1;
        document.getElementById(id).value = current;
    }
    if(current >= 100){
        document.getElementById(id).value = 99;
    }
    
}
function minus(id){
    var current = document.getElementById(id).value;
    if(current>0){
        current = Number(current) - 1;
        document.getElementById(id).value = current;
    }
    if(current <= 0){
        document.getElementById(id).value = 1;
    }
    
}
function showHidePopups(popups){
    var check = document.getElementById(popups).classList;
    check.forEach(item => {
        if(item === "hide"){
            check.remove("hide");
        }else{
            check.add("hide");
        }
    });
}
window.onload = function(){
    var total = 0;
    $("tr .price").each(function(index,value){
            currentRow = parseFloat($(this).text());
            total += currentRow
        });
        $("#total").text(total+ "$");
    $("input[name='quantity']").on('keyup mouseup', function(){
        let id = this.id;
        console.log(id);
        let price = $("#price_"+id).text().replace("$","");
        let newPrice = parseInt(this.value)*parseInt(price);
        $("#total_"+ id).text(newPrice+ '$')
        total += parseInt(price);
        $("#total").text(total+"$");
    });
}

var sliderIce = document.getElementById("optionIce") || null;
var sliderSugar = document.getElementById("optionSugar") || null;
var percentIce = document.getElementById("percent-ice") || null;
var percentSugar = document.getElementById("percent-sugar") || null;

if( sliderIce !== null){
    percentIce.innerHTML = sliderIce.value;
    sliderIce.oninput = function(){
        percentIce.innerHTML = this.value;
    }
}
if( sliderSugar !== null){
    percentSugar.innerHTML = sliderSugar.value;
    sliderSugar.oninput = function(){
        percentSugar.innerHTML = this.value;
    }
}