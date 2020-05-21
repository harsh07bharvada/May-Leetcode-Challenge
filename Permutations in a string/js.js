/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    const getIndex = c => c.charCodeAt()-'a'.charCodeAt();
    let s1Freq = Array.from({length : 26},x => 0);
    let s2Freq = Array.from({length : 26},x => 0);

    s1.split("").forEach(c => s1Freq[getIndex(c)]++);
    let s1FreqStr = s1Freq.toString();
    for (let i = 0; i < s2.length; i++)
    {
        s2Freq[getIndex(s2.charAt(i))]++;
        if ( i >= s1.length) 
            s2Freq[getIndex(s2.charAt(i - s1.length))]--;
        if (s1FreqStr === s2Freq.toString())
            return true;
    }

    return false;
    
};