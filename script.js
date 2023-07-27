//your JS code here. If required.
// Function to detect the user's browser and display the information
function displayBrowserInfo() {
  const browserInfoDiv = document.getElementById('browser-info');
  let browserName, version;

  // Check if the browser is Internet Explorer (since it has a different method for version detection)
  if (navigator.userAgent.includes("MSIE") || navigator.userAgent.includes("Trident/")) {
    browserName = "Internet Explorer";
    version = detectIEVersion();
  } else {
    // For other browsers, we can use the regular navigator properties
    browserName = getBrowserName();
    version = navigator.appVersion;
  }

  // Display the information on the page
  browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
}

// Function to detect the version of Internet Explorer
function detectIEVersion() {
  const ua = navigator.userAgent;
  const msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  const trident = ua.indexOf("Trident/");
  if (trident > 0) {
    const rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  return "unknown";
}

// Function to get the browser name for non-IE browsers
function getBrowserName() {
  const isFirefox = typeof InstallTrigger !== "undefined";
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  const isEdge = /Edge/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isFirefox) {
    return "Firefox";
  } else if (isChrome) {
    return "Chrome";
  } else if (isEdge) {
    return "Edge";
  } else if (isSafari) {
    return "Safari";
  } else {
    return "unknown";
  }
}

// Display the browser information when the page loads
window.onload = displayBrowserInfo;
