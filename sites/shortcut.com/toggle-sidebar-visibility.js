// ==UserScript==
// @name         Toggle Sidebar visibility
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allow Shortcut to toggle sidebar for extra width display
// @author       Josh Frankel <joshmfrankel@gmail.com>
// @match        https://app.shortcut.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let toggleElementFunction = function(event) {
        let nextSibling = event.target.nextElementSibling;

        if (nextSibling.style.display === "none") {
          nextSibling.setAttribute("style", "display: block;");
        } else {
          nextSibling.setAttribute("style", "display: none;");
        }
    };

    // Wait until element exists
    var checkExist = setInterval(function() {
        let sidebar = document.querySelectorAll('[data-perma-id="sidebar"]');
        if (sidebar.length) {
            let toggleButton = document.createElement("button");
            let currentSidebar = sidebar[0];

            toggleButton.innerText = "toggle";
            toggleButton.setAttribute("style", "color: #000");
            toggleButton.onclick = toggleElementFunction;

            currentSidebar.setAttribute("style", "width: auto;");
            currentSidebar.prepend(toggleButton);

            clearInterval(checkExist);
        }
    }, 50); // check every 50ms
})();
