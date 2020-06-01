/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    const m = word1.length;
    const n = word2.length;
    let arr = new Array(m+1);
    for(let i=0;i<m+1;i++ )
        arr[i] = new Array(n+1).fill(0);
    
    for(let i=0;i<m+1;i++)
        arr[i][0] = i;
    
    for(let i=0;i<n+1;i++)
        arr[0][i] = i;
    
    for(let i=1;i<=m;i++)
    {
        for(let j=1;j<=n;j++)
        {
            if(word1.charAt(i-1) === word2.charAt(j-1))
            {
                arr[i][j] = arr[i-1][j-1];
            }
            else
            {
                arr[i][j] = 1 + Math.min(arr[i-1][j-1],arr[i-1][j],arr[i][j-1]);
            }
        }
    }
    return arr[m][n]
    
};