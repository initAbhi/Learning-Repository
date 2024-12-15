let arr = [4,6,2,1,3,7]

for(let i = 0; i <= arr.length;i++){
    let min = i;
    for(let j = i+1; j<=arr.length -1; j++){
        if(arr[j] < arr[min]){
            min = j
        }
    }
    if(min != i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
console.log("sorted array - ",arr)