let ar = [2,21,5,3,95];
large  = ar[0];
for(let i=0; i <= ar.length; i++) {  
    if( large < ar[i]) {
      large = ar[i];
    }   
}
console.log(large);
