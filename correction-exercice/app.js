let fatoura = 40 ; 



// if (fatoura<=300 && fatoura>=50){
//     const zyeda = fatoura*0.15
//     console.log(zyeda)
// } else {
//     const zyeda = fatoura*0.2
//     console.log(zyeda);
    
// }

const zyeda = fatoura<=300 && fatoura>=50 ? fatoura*0.15 : fatoura*0.2 ;

console.log(zyeda)

console.log(`el fatoura ray ${fatoura} w zyeda mte3ha ${zyeda} w total raw ${fatoura+zyeda} `)
// condition ? true : false