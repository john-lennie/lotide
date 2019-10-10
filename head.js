const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length > 1) {
    return arr[0];
  }
};

// TEST CODE
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
