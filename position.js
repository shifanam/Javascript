let ar = [2,3,5,7,9];
let target = 0;
for(let i = 0; i < ar.length; i++) {
    if( ar[i] == target){
        console.log(i);
        break;
    }
    else if(target < ar[0]){           
        console.log(i);
        break;
    }
    else if(ar[i] > target){
        console.log(i-1);
        break;
    }
    else if(i == ar.length-1 && target > ar[i]) {
        console.log(i+1);
        break;
    }

}

