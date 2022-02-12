let toTopDiv = document.querySelector('.toTop');
window.addEventListener('scroll', function(){
  let pxWin = window.pageYOffset;
  if(pxWin>200){
    toTopDiv.style.display = 'block';
  }
  else{
    toTopDiv.style.display = 'none';
  }
});
window.addEventListener('load', function(){
  toTopDiv.style.display = 'none';
});
