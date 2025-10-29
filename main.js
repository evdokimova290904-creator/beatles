
document.addEventListener('click',(e)=>{
  const t=e.target;
  if(t.matches('.gallery img')){
    const modal=document.createElement('div');
    modal.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;z-index:9999';
    modal.innerHTML=`<img src="${t.src}" style="max-width:90vw;max-height:90vh;border-radius:12px">`;
    modal.addEventListener('click',()=>modal.remove());
    document.body.appendChild(modal);
  }
});
(function(){const here=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('active')})})();
