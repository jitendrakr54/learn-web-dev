let count = 0;
function counter() {
  count++;
  setTimeout("counter()", 1000);
  postMessage(count);
}

counter();
