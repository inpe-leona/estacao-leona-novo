var estacao = angular.module('estacao', []);

estacao.controller('estacao', function ($http) {
    var wsUri = 'ws://150.163.46.208:8084/leona-novo/saojose';
    var webSocket = new WebSocket(wsUri);
    webSocket.binaryType = 'arraybuffer';
    webSocket.onmessage = function (evt) {
        onMessage(evt);
    };
    webSocket.onerror = function (evt) {
        onError(evt);
    };
    function onMessage(evt) {
        console.log('recebido: ' + evt.data);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log('comunicou');
            }
        };
        var data = JSON.parse(evt.data);
        var url = 'estacao?data='+data;
        xhttp.open("POST", url, true);
        xhttp.send();
    }
});

