(function(global) {
 'use strict';
 const structure = 'struct node {\n    int data;\n    struct node *next;\n};';
 function listText(values,circular=false,doubly=false){if(doubly)return values.length?'NULL ← '+values.join(' ⇄ ')+' → NULL':'Boş liste';return values.length?values.join(' → ')+(circular?' ↩ head':' → NULL'):'Boş liste';}
 function makeProgram(task,code){
  const helpers=`#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

${task.structure||structure}

/* Liste düğümleri malloc ile ayrılır. */
static struct node *listeKur(const int *a, size_t n, int daire) {
    struct node *head = NULL, *son = NULL;
    for (size_t i = 0; i < n; ++i) {
        struct node *yeni = malloc(sizeof *yeni);
        assert(yeni != NULL);
        yeni->data = a[i];
        yeni->next = NULL;${task.doubly?'\n        yeni->prev = son;':''}
        if (head == NULL) head = yeni;
        else son->next = yeni;
        son = yeni;
    }
    if (daire && son != NULL) son->next = head;
    return head;
}

static int ayni(struct node *head, const int *beklenen, size_t n, int daire) {
    struct node *p = head;${task.doubly?'\n    struct node *onceki = NULL;':''}
    for (size_t i = 0; i < n; ++i) {
        if (p == NULL || (i > 0 && p == head) || p->data != beklenen[i]) return 0;
        ${task.doubly?'if (p->prev != onceki) return 0;\n        onceki = p;\n        ':''}p = p->next;
    }
    if (n == 0) return head == NULL;
    return daire ? p == head : p == NULL;
}

static void temizle(struct node *head, int daire) {
    if (daire && head != NULL) {
        struct node *son = head;
        while (son->next != head) son = son->next;
        son->next = NULL;
    }
    while (head != NULL) {
        struct node *eski = head;
        head = head->next;
        free(eski);
    }
}

/* Sizin fonksiyonunuz */
${code}

int main(void) {
`;
  let body='';
  task.tests.forEach((test,index)=>{
   body+=`    {\n        const int giris[] = {${test.a.length?test.a.join(', '):'0'}};\n        struct node *head = listeKur(giris, ${test.a.length}, ${task.circular?1:0});\n`;
   if(test.b)body+=`        const int giris2[] = {${test.b.length?test.b.join(', '):'0'}};\n        struct node *ikinci = listeKur(giris2, ${test.b.length}, 0);\n`;
   if(test.value!==undefined)body+=`        int deger = ${test.value};\n`;
   if(task.id==='yazdir'){
    body+=`        printf("Test ${index+1} - beklenen: ${test.out.join(' ')}\\nGercek: ");\n        yazdir(head);\n        printf("\\n");\n`;
   }else body+=`        head = ${task.call};\n`;
   body+=`        const int beklenen[] = {${test.out.length?test.out.join(', '):'0'}};\n        assert(ayni(head, beklenen, ${test.out.length}, ${task.circular?1:0}));\n        temizle(head, ${task.circular?1:0});\n    }\n`;
  });
  return helpers+body+(task.id==='yazdir'?'    puts("Liste yapisi korundu. Yazdirma ciktilarini yukaridaki beklenen degerlerle karsilastirin.");\n':'    puts("Butun liste sonucu testleri gecti.");\n')+'    return 0;\n}\n';
 }
 global.CWriting={structure,listText,makeProgram};

})(typeof window==='undefined'?globalThis:window);
