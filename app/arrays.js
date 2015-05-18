exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    return arr.reduce(function(a,b) {
      return a + b;
    })
  },

  remove : function(arr, item) {
    return arr.filter(function(element) {
      return element != item;
    })
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      var index = arr.indexOf(item)
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
    return arr
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    /* behind the scenes, apply splits that 2nd argument, which is an array, into separate elements which is similar to what
     call does... whose first argument is this and the rest of them are individual elements. */
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count : function(arr, item) {
    var counts = {};

    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    };
    return counts[item];
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
