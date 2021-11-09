
var menuitems = document.getElementById("menu-items");

menuitems.style.maxHeight = "0px";

function menutoggle(){

    if(menuitems.style.maxHeight == "0px")
    {
        menuitems.style.maxHeight = "300px";
    }

else{
    menuitems.style.maxHeight = "0px";

}
}


// js for product gallary (product details page)////

var productImg = document.getElementById("product-img");

var smallImg= document.getElementsByClassName("small-img");
smallImg[0].onclick = function()
{
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function()
{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function()
{
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function()
{
    productImg.src = smallImg[3].src;
}

// Form 



