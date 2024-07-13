const areDeepEqual = (o1, o2) => {
   if(typeof o1 !== typeof o2) return false;

   if(typeof o1 !== 'object') return o1 === o2; // primitive

   if(Array.isArray(o1) || Array.isArray(o2)) { // Array
    if(String(o1) !== String(o2)) return false
    for(let i = 0; i < o1.length; i++) {
        if(!areDeepEqual(o1[i], o2[i])) return false
    }
    } else { // Object
        if(Object.keys(o1).length !== Object.keys(o2).length) return false;
        for(const key in o1) {
            if(areDeepEqual(o1[key], o2[key])) return false
        }
   }
   return true;

};

console.log(areDeepEqual({"x": 1, "y": 2}, {"x": 1, "y": 2})); // True
console.log(areDeepEqual({"x": 1, "y": 2}, {"y": 1, "x": 2})); // True different order but still matches
console.log(areDeepEqual({"x": 1, "y": [1,2,3]}, {"y": ["1", "2", "3"], "x": 2})); // different order but still matches // False