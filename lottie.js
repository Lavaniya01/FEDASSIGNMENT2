console.log('Need to wait');

setTimeout(function() {
  console.log('setting window location');
  window.location.href = "homepage after login.html";
}, 60000);