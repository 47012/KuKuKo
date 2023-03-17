// detect if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// function to show the popup
function showPopup() {
    alert("Please view this page with PC for best experience!");
}

// call the showPopup function if the device is a mobile device
if (isMobileDevice()) {
    window.onload = function() {
        showPopup();
    }
}
