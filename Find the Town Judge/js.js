/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    
        
    let trustArr = new Array(N);
    let countArr = new Array(N);
    for(let i=0;i<N;i++)
    {
        trustArr[i] = false;
        countArr[i] = 0;
    }
    
    for(let i=0;i<trust.length;i++)
    {
        trustArr[trust[i][0]-1] = true;
        countArr[trust[i][1]-1]++;
    }

    let index = -1;
    for(let i=0;i<N;i++)
    {
        
        if(!trustArr[i] && countArr[i]==N-1)
        {
            index = i+1;
            break;
        }
    }
    return index;
    

};