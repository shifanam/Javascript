let ar = [1,3,5,4];
let target = 7;
for(let i=0; i <= ar.length; i++){
    let m=target-ar[i];
    for(let j=i; j <= ar.length; j++){
        if(m==ar[j]){
            console.log(ar[i],ar[j]);
        }
    }
}
