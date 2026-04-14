nums=[]

let num = prompt('Enter a number:');
while (! nums.includes(num)) {
    nums.push(num);
    num = prompt('Enter another number:');
}
nums.sort((a, b) => a-b);
console.log(nums);