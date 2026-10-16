(function(g){
g.CMapHeight=1730;
g.CCaseMap=[
 {x:175,y:235,name:'Sessiz Rıhtım',color:'#9d8fa8',kind:'pier'},
 {x:500,y:185,name:'Gece Garı',color:'#8197aa',kind:'station'},
 {x:820,y:265,name:'Kayıt Arşivi',color:'#b4a184',kind:'tower'},
 {x:820,y:485,name:'Arka Sokak',color:'#9d7d83',kind:'gate'},
 {x:505,y:435,name:'Gözlem Feneri',color:'#b5a176',kind:'lighthouse'},
 {x:185,y:485,name:'Şüpheli Barı',color:'#9f7d88',kind:'market'},
 {x:180,y:730,name:'Demir Köprü',color:'#8397a2',kind:'bridge'},
 {x:500,y:680,name:'Kayıp Kavşak',color:'#a2957d',kind:'junction'},
 {x:820,y:740,name:'Sisli Avlu',color:'#84978b',kind:'garden'},
 {x:810,y:1000,name:'Son Sefer',color:'#8993ac',kind:'observatory'},
 {x:490,y:1035,name:'Kilitli Depo',color:'#a28382',kind:'ruins'},
 {x:175,y:1010,name:'Eski Adliye',color:'#b0a183',kind:'temple'},
 {x:190,y:1330,name:'Delil Laboratuvarı',color:'#8b9eac',kind:'lab'},
 {x:510,y:1290,name:'Mükerrer Kayıt Oteli',color:'#aa899b',kind:'hotel'},
 {x:820,y:1340,name:'Dosya Postanesi',color:'#aa987c',kind:'post'},
 {x:510,y:1590,name:'Gece Çemberi',color:'#8b9e8e',kind:'circle'}
];
g.CMapRoute=function(from,to){const stops=g.CCaseMap,out=[];if(from===to)return [stops[from]];const direction=to>from?1:-1;for(let i=from;i!==to;i+=direction){const a=stops[i],b=stops[i+direction],prev=stops[Math.max(0,Math.min(stops.length-1,i-direction))],next=stops[Math.max(0,Math.min(stops.length-1,i+direction*2))];for(let n=0;n<=20;n++){const t=n/20,u=1-t,c1={x:a.x+(b.x-prev.x)/6,y:a.y+(b.y-prev.y)/6},c2={x:b.x-(next.x-a.x)/6,y:b.y-(next.y-a.y)/6};out.push({x:u*u*u*a.x+3*u*u*t*c1.x+3*u*t*t*c2.x+t*t*t*b.x,y:u*u*u*a.y+3*u*u*t*c1.y+3*u*t*t*c2.y+t*t*t*b.y});}}return out;};
})(window);
