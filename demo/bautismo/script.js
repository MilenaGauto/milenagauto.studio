const t=new Date('2027-04-18T11:00:00-03:00'),g=i=>document.getElementById(i);
function u(){const x=Math.max(0,t-new Date());g('d').textContent=Math.floor(x/864e5);g('h').textContent=Math.floor(x/36e5)%24;g('m').textContent=Math.floor(x/6e4)%60}
u();setInterval(u,30000);
