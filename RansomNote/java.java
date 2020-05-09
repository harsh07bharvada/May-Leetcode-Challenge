class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if(ransomNote.length() > magazine.length())
            return false;
        HashMap<Character,Integer> map = new HashMap<>();
        
        for(int i =0 ;i < magazine.length();i++)
        {
            Character c = magazine.charAt(i);
            if(map.containsKey(c))
            {
                Integer value = map.get(c);
                value++;
                map.put(c,value);
            }
            else
                map.put(c,1);
        }
        boolean done = true;
        for(int i=0;i< ransomNote.length();i++)
        {
            Character c = ransomNote.charAt(i);
            
            if(map.containsKey(c))
            {
                Integer value = map.get(c);
                value--;
                if(value <= 0)
                    map.remove(c);
                else
                    map.put(c,value);
            }
            else{
                done=false;
                break;
            }
        }
        return done;
    }
}