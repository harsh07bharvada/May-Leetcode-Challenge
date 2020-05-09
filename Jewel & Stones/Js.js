/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    let set = new Set();
    let counter = 0;
    for( c of J.split(""))
        set.add(c);
    
    for(let i = 0;i<S.length;i++)
    {
        set.has(S[i]) ? counter++:"";
    }
    return counter;
    
};