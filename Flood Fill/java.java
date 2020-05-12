class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        HashSet<String> set = new HashSet<>();
        colorCurr(image,sr,sc,newColor,oldColor,set);
        return image;
    }
    
    
    public void colorCurr(int[][] image,int x, int y, int newColor, int oldColor,HashSet set)
    {
        if(x<0 || x >= image.length || y < 0 || y >= image[x].length || image[x][y] != oldColor || set.contains(x+"_"+y))
            return;
        
        image[x][y] = newColor;
        set.add(x+"_"+y);
        
        colorCurr(image,x-1,y,newColor,oldColor,set);
        colorCurr(image,x+1,y,newColor,oldColor,set);
        colorCurr(image,x,y-1,newColor,oldColor,set);
        colorCurr(image,x,y+1,newColor,oldColor,set);
        return;
    }
    
}