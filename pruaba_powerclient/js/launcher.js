
function isMatchLauncherType(notSupportStartMode) {
    var launcherType = -1;
    $.ajaxSettings.async = false;
    var jsonUrl = "../CloudAppPublisher/CloudAppInstall/LauncherSetup.json?varRandom=" + Math.random();
    $.getJSON(jsonUrl, function (data) {
        var jsonObj = data;
        launcherType = jsonObj["mode"];
    });

    if (notSupportStartMode == launcherType) {
        return false;
    }
    else {
        return true;
    }
}

function isIE() {
    var strUserAgent = window.navigator.userAgent.toLowerCase();
    var isLowerIE = strUserAgent.indexOf("compatible") > -1 && strUserAgent.indexOf("msie") > -1;   
    var isIE11 = strUserAgent.indexOf('trident') > -1 && strUserAgent.indexOf("rv:11.0") > -1;
    return isLowerIE || isIE11
}

function isWindows7() {
    var bIsWindows7 = false;
    var strUserAgent = window.navigator.userAgent.toLowerCase();

    if (strUserAgent.indexOf("windows nt 6.1") > -1 || strUserAgent.indexOf("windows 7") > -1) {
        bIsWindows7 = true;
    }

    return bIsWindows7;
}

function showMessageBox() {
    alert("Failed to find the appropriate Cloud App Launcher on the server that can support the application in its current startup mode. Please either upload the correct launcher to the server, or use the other application startup mode, and try again.");
}