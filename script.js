function hoverButton(){
    document.getElementById("but").style.backgroundColor ="red";

}
 function hover(){
     document.getElementById("but").style.backgroundColor="rgb(103, 38, 110)";
 }
function show(){

    document.getElementById("click").style.visibility="visible"
 }
 function dclick(){

    document.getElementById("click").style.visibility="hidden"
 }
 var n=0;
 function hovered(){
    n=n+1;
    document.getElementById("img1").innerHTML=n;
    
 }
 var n=0;
 function hovered2(){
    n=n+1;
    document.getElementById("img2").innerHTML=n;
    
 }
 function hovered3(){
    n=n+1;
    document.getElementById("img3").innerHTML=n;
    
 }
 function clc(){
   document.getElementById("colored").style.color="#00bc8a";
   document.getElementById("colored").style.textDecoration="underline";
 }
 function clct(){
   document.getElementById("coloredt").style.color="#00bc8a";
   document.getElementById("coloredt").style.textDecoration="underline";
 }
 function clcl(){
   document.getElementById("coloredl").style.color="#00bc8a";
   document.getElementById("coloredl").style.textDecoration="underline";
 }
 function clci(){
   document.getElementById("coloredi").style.color="#00bc8a";
   document.getElementById("coloredi").style.textDecoration="underline";
 }
 function clch(){
   document.getElementById("coloredh").style.color="#00bc8a";
   document.getElementById("coloredh").style.textDecoration="underline";
 }
 function clce(){
   document.getElementById("colorede").style.color="#00bc8a";
   document.getElementById("colorede").style.textDecoration="underline";
 }
 function valid(){
    var t =prompt("your Name ...");
    if (t =="rana"){
      window.location="index.html";
    }else{
      alert("wrong !!")
    }
 }