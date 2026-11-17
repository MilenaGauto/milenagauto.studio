const g=i=>document.getElementById(i),t=new Date('2027-10-09T17:00:00-03:00');
function u(){const x=Math.max(0,t-new Date());g('d').textContent=Math.floor(x/864e5);g('h').textContent=Math.floor(x/36e5)%24;g('m').textContent=Math.floor(x/6e4)%60}
u();setInterval(u,30000);
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),{threshold:.2});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const im=[...document.querySelectorAll('#car img')],dt=g('dots');let c=0,tm;
function show(i){c=i;im.forEach((m,k)=>m.classList.toggle('on',k==i));[...dt.children].forEach((b,k)=>b.classList.toggle('on',k==i))}
im.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Foto '+(i+1));if(!i)b.className='on';b.onclick=()=>{show(i);clearInterval(tm);tm=setInterval(nx,4000)};dt.appendChild(b)});
function nx(){show((c+1)%im.length)}tm=setInterval(nx,4000);
const au=g('au'),mb=g('mb');au.addEventListener('canplay',()=>mb.hidden=false,{once:true});
mb.onclick=()=>{au.paused?au.play():au.pause();mb.textContent=au.paused?'♪':'❚❚'};
