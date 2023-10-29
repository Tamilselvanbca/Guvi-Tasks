// A. Print odd numbers in an array
//Anonymous Function
let arr=[1,2,3,4,5,6,7,8,9] 
function odd(){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
      console.log(arr[i])
    }
  }
}
odd()

//IIFE Function
(function(odd1){
  let arr=[1,2,3,4,5,6,7,8,9] 
  for(var i=0;i<arr.length;i++){
if(arr[i]%2!=0){
  console.log(arr[i])
}
  }
})();

//B.convert all the strings to title caps in a string array
//Anonymous Function
var str="welcome to chennai";
function caps(){
  str = str.toLowerCase().split(' ');
  for(var i=0; i<str.length; i++){
  str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
return str.join(' ');
}
console.log(caps());

//IIFE Function:
var str="i am a good boy";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})(str);
//C.Sum of all numbers in an array
//Anonymous function
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
function sumof(){
   for(var i=0; i<a.length; i++) {
     sum=sum+a[i];
   }
   return sum;
}console.log(sumof());

//IIFE function:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
})(a);

//D.Return all the prime numbers in an array
//Anonymous Function:
var n=34;
function prime(n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++){
         if(i%j==0){
            flag=1;
            break;
         }
      }
      if(flag==0){
      console.log(i);
      }
   }
}
console.log(prime(n));

//IIFE function:
let n=34;
(function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(n);

//E.Return all the palindromes in an array
//Anonymous Function : 
 function pali(arr, n){ 
  for (let i = 0; i < n; i++){
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(pali([1,23,4],5));

//IIFE function: 
(function (arr, n) {
            for (let i = 0; i < n; i++){
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3,4,5],3)
    
//F.Return median of two sorted arrays of the same size.
//Anonymous function:
function same(arr1, arr2) {
   let s1= arr1.length
   let s2= arr2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return arr2[Math.floor(index/2)]
       }else{
           return(arr2[Math.floor(index/2)-1] + arr2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           arr1.push(arr2[i])
       }
   arr1.sort((a,b)=>a-b)
   console.log(arr1)
   if(index%2==1){
       return arr1[Math.floor(index/2)]
   }else{
       return (arr1[Math.floor(index/2)-1] + arr1[Math.floor(index/2)])/2
   }
};
console.log(same([3,5],[2,5]));
//IIFE function:
(function(arr1, arr2) {
   let s1= arr1.length
   let s2= arr2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return arr2[Math.floor(index/2)]
       }else{
           return  (arr2[Math.floor(index/2)-1] + arr2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           arr1.push(nums2[i])
       }
   arr1.sort((a,b)=>a-b)
   console.log(arr1)
   if(index%2==1){
       return arr1[Math.floor(index/2)]
   }else{
       return (arr1[Math.floor(index/2)-1] + arr1[Math.floor(index/2)])/2
   }
})();

//G.Remove duplicates from an array
//Anonymous function:
var array=[1,1,2,3,4,5];
function dub(array){
   let dup = [...new Set(array)];
   return(dup);
 }
 console.log(dub(array));

 //IIFE Function:
 var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);

//H.Rotate an array by k times
//Anonymous function:
function rotate(a, n, k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
 console.log(a[n + i - k] + " ");
        }
        else {
    console.log((a[i - k]) + " ");
        }
    }
}
  let array=[1, 2, 3, 4, 5];
let n=array.length;
let k=2;
console.log(rotate(array, n, k));

//IIFE function:
var array = [1, 2, 3, 4, 5];
var n = Array.length;
var g= 2;
(function (a, n, g)
{
    g = g % n;
    for (let i = 0; i < n; i++) {
        if (i < g) {
          console.log(a[n + i - g] + " ");
        }
        else {   
            console.log((a[i - g]) + " ");
        }
    }
})
(array, n, g);

 

