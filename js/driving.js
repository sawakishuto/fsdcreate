// JavaScript プログラム 
window.addEventListener("load",()=>{

  const hanb = document.querySelector(".hanberger")
  const menu = document.querySelector(".menu")
 const html = document.querySelector("html")
  const slide1 = document.querySelector(".slide1")
  const slide2 = document.querySelector(".slide2")
const volvo = document.querySelector(".volvo")
  slide1.classList.add("out")
  slide2.classList.add("out")

  const memoryditail = document.querySelector(".wrapp1-inner")
  const moterditail = document.querySelector(".wrapp2-inner")
  const wrapp2 = document.querySelector(".wrapp2")
  const wrapp1 = document.querySelector(".wrapp1")
  const detail = document.querySelector(".kenkyuditail")
  const shoukai = document.querySelector(".shoukai")
  window.addEventListener('scroll',showdetail)
  showdetail();
  function showdetail(){
    const triggerBottom = (window.innerHeight / 5);
    const memorydetailtop = memoryditail.getBoundingClientRect().top -300
    const wrapp2top = wrapp1.getBoundingClientRect().top -300
    const wrapp1top = wrapp1.getBoundingClientRect().top -300
    const detailtop =  detail.getBoundingClientRect().top -300
    const shoukaitop =  shoukai.getBoundingClientRect().top -300
    if (detailtop < triggerBottom)  {
      detail.classList.add("show")

    }
    else{
      detail.classList.remove("show")
    }
    if (shoukaitop < triggerBottom)  {
      shoukai.classList.add("show")

    }

    if (wrapp1top < triggerBottom)  {
      wrapp1.classList.add("show")

    }
    else{
      wrapp1.classList.remove("show")
    }
    if (wrapp2top < triggerBottom)  {
      wrapp2.classList.add("show")

    }
    else{
      wrapp2.classList.remove("show")
    }
    if (memorydetailtop < triggerBottom)  {
     memoryditail.classList.add("show")
     moterditail.classList.add("show")

    }
    else{
      memoryditail.classList.remove("show")
      moterditail.classList.remove("show")
    }



  }
hanb.addEventListener('click',()=>{
 
  hanb.classList.toggle("ontap")
  menu.classList.toggle("menushow")

})
})
