const allEvens = arr => {
    if(arr.every(num => num % 2 === 0)){
        return true;
    }
    return false;
}