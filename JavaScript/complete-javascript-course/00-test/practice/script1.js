/* var fullname = "Joe Black";
var obj = {
  fullname: "Mary Jackson",
  prop: {
    fullname: "BobSmith",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test);
console.log(test());
 */

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

let w;

function startWebWorker() {
  console.log("startWebWorker");
  if (typeof Worker !== "undefined") {
    if (typeof w === "undefined") {
      w = new Worker("counter.js");
    }
    w.onmessage = function (event) {
      document.querySelector(".result").innerText = event.data;
    };
  }
}

function stopWebWorker() {
  w.terminate();
  w = undefined;
}
