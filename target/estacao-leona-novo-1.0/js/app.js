var estacao = angular.module('estacao', ['estacaoController']);

angular.module('estacaoController', [])
        .controller('estacao', function () {

            var wsUri = 'ws://192.168.0.43:8084/leona-novo/saojose';
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
                var objeto = JSON.parse(evt.data);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {console.log('comunicou');}
                };
                var data = JSON.parse(evt.data);                
                var url = 'estacao?graus='+data.graus+'&movimento='+data.movimento+'&datahora='+data.datahora;
                xhttp.open("POST", url, true);
                xhttp.send();
            }
        });