function checkCookieEnabled() {
    if (navigator.cookieEnabled) {
      console.log("Cookies are enabled");
    } else {
      console.log("Cookies are disabled");
    }
  }
  
  
  function promptAcceptCookies() {
    if (!checkCookieEnabled()) {
      const shouldAcceptCookies = confirm("This website uses cookies. Do you accept?");
  
      if (shouldAcceptCookies) {
        document.cookie = "cookiesAccepted=true; expires=365 days; path=/";
      } else {
        alert("Some features of this website may not work without cookies.");
      }
    }
  }
  window.onload = promptAcceptCookies;