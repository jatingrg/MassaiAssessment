function palindrome(word){
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

function countVowels(word){
    const vowels = ['a','e','i','o','u'];
    const ans  = word.toLowerCase().split('').filter((ele) => vowels.includes(ele)).length
    return ans;
}

module.exports ={palindrome,countVowels};