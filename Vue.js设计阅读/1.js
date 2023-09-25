function deleteMiddle(arr) {
    var arr1 = [];
 for(var i=0;i<arr.length;i++){
    if(arr[i] + arr[i+1] == arr[i+2]){
        console.log(arr1)
        arr1.push(arr[i+1]);
    }
 }
 return arr1
}