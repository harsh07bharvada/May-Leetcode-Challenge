/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int kthSmallest(TreeNode root, int k) {
        
        List<Integer> arr = new ArrayList<>();
        inorder(arr,root,k);
        return arr.get(k-1);
    }
    
    public void inorder(List<Integer> arr,TreeNode node,int k)
    {
        if(null == node)
        {
            return;
        }
        else
        {
            inorder(arr,node.left,k);
            arr.add(node.val);
            inorder(arr,node.right,k);
        }
    }
}