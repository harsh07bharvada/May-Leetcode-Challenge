/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let arr = [];
    const inorder = (node) => {
        if(!node)
            return;
        else
        {
            inorder(node.left);
            arr.push(node.val);
            if(arr.length == k)
                return arr[k-1];
            inorder(node.right);
        }
    }
    
    inorder(root);
    return arr[k-1];
    
};