var xmlHttp = new XMLHttpRequest();

var json;

var ALL_OFF = 0;
var SW2_1 = 1;


 setInterval(getSwitches, 1000);

function clickSw(id) {

    if (document.getElementById(id).checked) {
        mode = true;
    } else {
        mode = false;
    }

    var content = "/switchesMode?id=" + id + "&mode=" + mode;

    xmlHttp.open("POST", content, true);
    xmlHttp.send();
}

function onLoad() {
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        xmlHttp.open('GET','/getSwitchesNames', true);
        xmlHttp.send();
        xmlHttp.onload = function(e) {

            var str = xmlHttp.responseText;

            json=JSON.parse(str);

            console.log(str);

            document.getElementById("switchname21").innerHTML = json.switchname21;

        }
    }

    getSwitches();  //get switches data
}

function getSwitches() {
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        xmlHttp.open('GET','/getDataSwithes',true);
        xmlHttp.send();
        xmlHttp.onload = function(e) {

            var str = xmlHttp.responseText;

            json=JSON.parse(str);

            // console.log(json.switches);

            // sonoff 2
            if (json.switches & SW2_1) {
                document.getElementById("sw21").checked = true;
            } else {
                document.getElementById("sw21").checked = false;
            }
        }
    }
}
