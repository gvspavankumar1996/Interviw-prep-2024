var d = 12;
function b() {
  let d = 10;
  a()
  function a() {
    console.log(d);
  }
}

b()
