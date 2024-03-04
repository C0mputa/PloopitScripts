javascript:(function() {
    var playerName = prompt("Who do you want a trade request from?");
    if (playerName) {
        var htmlCode = '<div id="Tpopup" style="visibility: visible; display: block;"><div id="Tmessagebox"><div id="Tmessage">' + playerName + ' has sent you a trade request</div><div class="TmessageButtons"><div class="Tmsgbutton accept">Accept</div><div class="Tmsgbutton deny">Deny</div></div></div><div id="Tmsgbg"></div></div>';
        document.body.innerHTML += htmlCode;
        
        document.querySelector('.accept').addEventListener('click', function() {
            document.getElementById('Tpopup').remove();
        });

        document.querySelector('.deny').addEventListener('click', function() {
            document.getElementById('Tpopup').remove();
        });
    }
})();
