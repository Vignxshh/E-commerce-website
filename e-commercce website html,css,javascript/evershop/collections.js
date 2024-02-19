var productcontainer=document.getElementById("product")
var searchh=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

searchh.addEventListener("keyup",function(event){
    var enteredvalue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i++){
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})