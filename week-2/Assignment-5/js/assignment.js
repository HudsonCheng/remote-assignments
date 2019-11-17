//week 2-5    

function twoSum(nums, target) {
  var i,j;
 for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j< nums.length; j++) {
      if( target === nums[i] + nums[j]) {
        return '[' + i + ', ' + j +']';
      }
    }
 }  
}

var array = [2,7,11,15];
var result = twoSum(array, 9);
console.log('The result is ' + result);