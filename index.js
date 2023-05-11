function callMeMaybe() {
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}

callMeMaybe();

// Because of closure, even though callMe is defined as const, it doesn't get hoisted. setTimeout goes to WebAPI and while it gets back through callback queue and event loop, callMe is created and pushes onto closure. SO we can use it after setTimeout gets done. How cool is this!~