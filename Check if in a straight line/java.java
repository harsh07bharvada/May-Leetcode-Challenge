class Solution {
    public boolean checkStraightLine(int[][] coordinates) {
        
        boolean res = true;
        if(coordinates.length == 2)
            return res;
        
        double x1 = coordinates[0][0],y1= coordinates[0][1] , x2 = coordinates[1][0], y2 = coordinates[1][1];
        System.out.println("x1:"+x1+" y1:"+y1+" x2:"+x2+" y2:"+y2);
        double ratio = (y2 - y1)/ (x2 - x1);
        System.out.println("ratio :"+ratio);
        int row =2;
        while(row < coordinates.length)
        {
            double currX = coordinates[row][0];
            double currY = coordinates[row][1];
            double prevX = coordinates[row-1][0];
            double prevY = coordinates[row-1][1];
            double newRatio = (currY - prevY)/( currX - prevX);
            System.out.println("newratio :"+newRatio);
            if( newRatio != ratio)
            {
                res = false;
                break;
            }
            row++;
        }
        return res;
        
    }
}