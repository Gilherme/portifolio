


function openMenuMobile(){
  let menuMobile = document.getElementById('menu-mobile')
  if(menuMobile.className.includes('open')){

     menuMobile.classList = 'closed'
  }else{
     menuMobile.classList = 'open'
  }
  
}