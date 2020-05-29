/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let count = {};
    let arr = [];
    const chars = s.split('');
    chars.forEach( v => {
        if(count[v])
            ++count[v];
        else
            count[v] = 1;
    });
    Object.entries(count).forEach(([key,value])=>arr.push([key,value]));
    arr.sort((a,b)=>b[1]-a[1]);
    
    return arr.reduce((acc,value)=>{
        let c = value[0];
        let times = value[1];
        for(let i=0;i<times;i++)
            acc += c;
        return acc;
    },'');
    
    
};