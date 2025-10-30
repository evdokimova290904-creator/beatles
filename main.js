
// highlight active link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav nav a').forEach(a=>{
  if(a.getAttribute('href')===path){a.classList.add('active')}
})
// gallery lightbox
const modal = document.createElement('div'); modal.className='modal'; modal.innerHTML='<img/>';
document.body.appendChild(modal);
document.addEventListener('click',e=>{
  const img = e.target.closest('.gallery img');
  if(img){ modal.querySelector('img').src = img.src; modal.classList.add('open'); }
  if(e.target===modal){ modal.classList.remove('open'); }
});
