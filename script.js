let back = document.getElementById('back');
let next = document.getElementById('next');
let scrollContainer = document.getElementById('scroll-container');

scrollContainer.addEventListener('wheel',(e)=>{
  e.preventDefault();
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += e.deltaY;
});

back.addEventListener('click',()=>{
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 450;
})

next.addEventListener('click',()=>{
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 450;
})
