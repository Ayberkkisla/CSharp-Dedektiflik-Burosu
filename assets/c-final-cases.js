(function(g){
'use strict';
// Case metadata is available before the case map is mounted; questions load later.
g.CFinalCaseEntries=[
 {n:21,finalGroup:'single',questionCount:10,task:{title:'Tek Yönlü Listeler · Final',hints:['10 hikâyeli soruda tek yönlü bağlantıları kur.'],art:'assets/case-loops/c-final-single'}},
 {n:22,finalGroup:'double',questionCount:5,task:{title:'Çift Yönlü Listeler · Final',hints:['5 hikâyeli soruda next ve prev oklarını birlikte koru.'],art:'assets/case-loops/c-final-double'}}
];
// Final dossiers occupy one normal card slot in the same winding sequence.
g.CBoardPlacements=function(finals,columns){
 columns=Math.max(1,Math.floor(columns)||1);
 return finals.map((_,i)=>{
  const row=Math.floor(i/columns);
  return {row:row+1,column:String(row%2?columns-i%columns:i%columns+1)};
 });
};
})(window);
