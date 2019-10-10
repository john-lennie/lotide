const assertEqual = function(actual, expected) {
  console.log(expected);
  if (actual === expected) {
    console.log("✅ ✅ ✅ assertion passed:", actual, "===", expected);
  } else {
    console.log("🛑 🛑 🛑 assertion failed:", actual, "!==", expected);
  }
};

const tail = function(arr) {
  let tailOfArr = []
  if (arr.length > 1) {
    arr.forEach((item, index) => {
      if (index > 0) {
        tailOfArr.push(item)
      }
    });
    return tailOfArr;
  }
  return [];
};

// TEST CODE
assertEqual(tail([]).join(''), [].join(''));
