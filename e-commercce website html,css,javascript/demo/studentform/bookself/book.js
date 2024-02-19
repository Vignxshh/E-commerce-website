//selecting classes=overlay,add_story
var popupoverlay=document.querySelector(".popup_overlay")
var addstory=document.querySelector(".add_story")

addstory.addEventListener("click",function(){
    popupoverlay.style.display="block"

})

//selecting cancel button

var cancelppbut=document.querySelector(".cancel_ppbutton")
cancelppbut.addEventListener("click",function(){
    popupoverlay.style.display="none"
})

//selecting book_tit,auth_name,description,add_ppbutton
var containerr=document.querySelector(".container")
var booktitle= document.getElementById("book_tit")
var authorname=document.getElementById("auth_name")
var addbutton=document.getElementById("add_ppbutton")
var des=document.getElementById("description")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var divv=document.createElement("div")
    divv.setAttribute("class","book_container")
    divv.innerHTML=`<h2>${booktitle.value}</h2>
                    <h5>${authorname.value}</h5>
                     <p>${des.value}</p><button>delete</button> `
    containerr.append(divv)

})
