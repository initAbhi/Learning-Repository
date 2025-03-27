//changes
let arr = [4,6,2,1,3,7]


for(let i = 0; i <= arr.length-1; i++ ){
    for(let j= 0; j<=arr.length -1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
    }
}
}        

console.log(`sorted array - ${arr}`)