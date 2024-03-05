/*
Implement a function which behaves like the uniq command in UNIX.
It takes as input a sequence and returns a sequence in which all 
duplicate elements following each other have been reduced to one instance.

Example:
  ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]
*/


// Solution

function uniq(a) {
  let newArr = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i+1]){
      a.splice(i,1)
      i--
    }
  }
  return a;
}

// or

function uniq(a) {
  return a.filter(function(x,i){return i == 0 || !(a[i-1] == x);});
}