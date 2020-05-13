/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let left = 0,right=nums.length-1;
    
    
    
    while(left <= right)
    {
        let mid = Math.floor((left+right)/2);
        console.log(" left :"+ left +" right : "+right+" mid :"+mid);
        if(mid == 0 && nums[mid] != nums[mid+1])
            return nums[mid];
        else if(mid == nums.length-1 && nums[mid] != nums[mid-1])
            return nums[mid];
        else if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1])
            return nums[mid];
        else
        {
            if(mid %2==0)
            {
                if(nums[mid] == nums[mid+1])
                {
                    left = mid+2;
                }
                else
                {
                    right= mid -2;
                }
            }
            else
            {
                if(nums[mid] == nums[mid-1])
                {
                    left = mid+1;
                }
                else
                {
                    right= mid -1;
                }
            }
            
        }
        
    }
    
};