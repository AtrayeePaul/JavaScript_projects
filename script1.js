function countVowels(str){
    var count = 0;
    for(const char of str){
        if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
            count++;
        }
    }
    return count;
}

const countVow = countVowels('hello');
console.log(countVow);