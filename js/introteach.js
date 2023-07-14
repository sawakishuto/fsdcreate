// JavaScript プログラム 
window.addEventListener("load",()=>{

  const hanb = document.querySelector(".hanberger")
  const menu = document.querySelector(".menu")
  const slide1 = document.querySelector(".slide1")
  const slide2 = document.querySelector(".slide2")
  slide1.classList.add("out")
  slide2.classList.add("out")
hanb.addEventListener('click',()=>{
 
  hanb.classList.toggle("ontap")
  menu.classList.toggle("menushow")

})
})
