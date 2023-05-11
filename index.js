function callMeMaybe() {
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}

callMeMaybe();

// Because of closure, even though callMe is defined as const, it doesn't get hoisted. setTimeout goes to WebAPI and while it gets back through callback queue and event loop, callMe is created and pushes onto closure. SO we can use it after setTimeout gets done. How cool is this!~


// Let me show you Two main benefits of using Closures
// 1. Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill('😉')
  console.log('Array created')
  return bigArray[index]
}
// This will create big Array three times
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
// This will create big Array only one time, because it's using Closure
const getHeavyDuty = heavyDuty2()
getHeavyDuty(123)
getHeavyDuty(123)
getHeavyDuty(123)

function heavyDuty2() {
  const bigArray = new Array(7000).fill('😉')
  console.log('Array created')
  return function(index) {
    return bigArray[index]
  }
}