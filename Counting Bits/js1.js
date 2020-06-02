var countBits = num => Array.from({length:num+1},(x,index)=>index)
.map(i => i.toString(2).split('')
.filter( bit => parseInt(bit)).length);