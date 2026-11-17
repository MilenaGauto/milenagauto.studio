const g=i=>document.getElementById(i);
[...'15'].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.animationDelay=.2+i*.25+'s';g('n').appendChild(s)});
[...'VALENTINA'].forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.animationDelay=.8+i*.07+'s';g('nm').appendChild(s)});
for(let i=0;i<40;i++){const e=document.createElement('i');e.className='star';e.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;animation-delay:'+Math.random()*3+'s';g('top').appendChild(e)}
addEventListener('scroll',()=>{g('top').querySelector('.orb').style.marginTop=Math.min(scrollY*.25,120)+'px'},{passive:true});
const t=new Date('2027-03-20T18:00:00-03:00');
function u(){const x=Math.max(0,t-new Date());g('d').textContent=Math.floor(x/864e5);g('h').textContent=Math.floor(x/36e5)%24;g('m').textContent=Math.floor(x/6e4)%60;g('s').textContent=Math.floor(x/1e3)%60}
u();setInterval(u,1000);
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
g('cp').onclick=()=>{try{navigator.clipboard.writeText(g('al').textContent)}catch(e){}g('cok').style.display='block'};
g('f').onsubmit=e=>{e.preventDefault();const f=new FormData(g('f'));
const msg='Hola! Confirmo asistencia a los 15 de Valentina.%0A'+encodeURIComponent('Nombre: '+f.get('n')+'\nPersonas: '+f.get('c')+'\nMenú: '+f.get('m')+(f.get('g')?'\nMensaje: '+f.get('g'):''));
window.open('https://wa.me/5493624000000?text='+msg,'_blank','noopener')};
const au=g('au'),mb=g('mb');au.addEventListener('canplay',()=>mb.hidden=false,{once:true});
mb.onclick=()=>{au.paused?au.play():au.pause();mb.textContent=au.paused?'♪':'❚❚'};
