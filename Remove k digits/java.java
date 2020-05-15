class Solution {
    public String removeKdigits(String num, int k) {
    String ans = new String();
       if(k == 0){
             return num;
        } 
        if(k == num.length()) {
            return "0";
        }
        Stack<Character> st = new Stack<>();
        int i=0;
        while(i <= num.length()-1){
            while(!st.isEmpty()&& (k > 0) && (st.peek() > num.charAt(i))){
                
                st.pop();
                k--;
            }
            st.push(num.charAt(i));
            i++;
        }
        while(k>0){
            st.pop();
            k--;
        } 
        
        while(!st.isEmpty()) {

            ans = st.pop() + ans;
            
        }
        
        while(ans.length() > 1 && ans.charAt(0) == '0')
            ans = ans.substring(1);
        
        return ans;
 
    }
}