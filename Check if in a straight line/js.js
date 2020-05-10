/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
        
    let res = true;
    if(coordinates.length == 2)
        return res;
    
    let x1 = coordinates[0][0],y1= coordinates[0][1] , x2 = coordinates[1][0], y2 = coordinates[1][1];
    let ratio = (y2 - y1)/ (x2 - x1);
    
    let row =2;
    while(row < coordinates.length)
    {
        let currX = coordinates[row][0];
        let currY = coordinates[row][1];
        let prevX = coordinates[row-1][0];
        let prevY = coordinates[row-1][1];
        let newRatio = (currY - prevY)/( currX - prevX);
        
        if( newRatio != ratio)
        {
            res = false;
            break;
        }
        row++;
    }
    return res;
    
  
};