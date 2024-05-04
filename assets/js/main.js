// handling side bar buttons
let leftSide = document.querySelector(".left-side-bar");
let leftSideBtn = document.querySelector(".left-side-btn")
let rightSide = document.querySelector(".right-side-bar");
let rightSideBtn = document.querySelector(".right-side-btn");
let leftCheck=true;
let rightCheck=true;
let profileBar = document.querySelector(".profile-bar") ;
let sendMoney = document.querySelector(".send-money") ;

window.onresize = function(){
  if(document.body.clientWidth>1200){
    leftCheck=false
    rightCheck=false
    leftSide.style.cssText= " left:0 !important";
    profileBar.style.cssText="display:block !important"
    sendMoney.style.cssText="display:flex !important"
  }else {
    leftCheck=true
    rightCheck=true
  leftSide.style.cssText= " left:-210 !important";
  profileBar.style.cssText="display:none !important"
  sendMoney.style.cssText="display:none !important"

}
}

leftSide.onclick = function(){
  if(leftCheck)
{  leftSide.style.cssText= " left:0 !important";
leftCheck=!leftCheck;}
else
{leftSide.style.cssText= " left:-210px !important";
leftCheck=!leftCheck;}
}



rightSide.onclick = function(){
  if(rightCheck)
{  
  // rightSide.style.cssText= " right:-310 !important";
profileBar.style.cssText="display:block !important"
sendMoney.style.cssText="display:flex !important"

rightCheck=!rightCheck;}
else
{
  // rightSide.style.cssText= " right:0px !important";
profileBar.style.cssText="display:none !important"
sendMoney.style.cssText="display:none !important"
rightCheck=!rightCheck;}
}