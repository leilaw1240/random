'use strict';

//console.log(location.hostname);
var GAMES;
var redirect;
var RESPONSE;
// if (Base64.decode(ENV) != 'development') {
//     console.log = function () { };
//     console.info = function () { };
//     console.error = function () { };
//     console.warn = function () {};
// }
// console.log(action);
// if (action == 'noscript') {
//     window.location.href = base_url;
// }

var date = new Date();
var current_time_stamp = date.getTime();

// Check for tou
var refreshId;
clearInterval(refreshId);
// refreshId = setInterval(function () {
//     functreloadchip();
     
// }, 10000);


var displayFormErrors = function (errorData) {
    console.info(errorData);

    if (Object.keys(errorData).length > 0) {
        var html = '';
        for (var key in errorData) {
            html += '<p>' + errorData[key] + '</p>';
        }
        console.log('Init Modal...!');
        setTimeout(function () {
            $('#load_modal_content').html(html);
            $('#commonModel').modal({show: true});
        }, 1000);
    }
}

var reloadcaptcha = function () {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = JSON.parse(xmlhttp.responseText);
            console.log(response);
            $('#captchImage').attr('src', response.image);
        }
    };
    xmlhttp.open("GET", base_url + "home/reloadcaptcha", true);
    xmlhttp.send();
}

function CommonAjax(url, data) {
    showLoader();
    $.ajax({
        url: url,
        type: 'post',
        data: data,
        async: false,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authorization': 'key=' + Base64.decode(service_access_key)
        },
        dataType: 'json',
        success: function (response) {
            hideLoader();
            RESPONSE = response;
        }
    });

}

var ValidateKyc = function () {
    console.log('KYC Initiated.....!');
    redirect = localStorage.getItem("kyc_redirect");
    console.log(Object.keys(kyc_list).length);
    if (Object.keys(kyc_list).length > 0) {
        if (kyc_list['profile'] == 1) {
            if (redirect == 'false' || redirect == null || redirect == undefined) {
                localStorage.setItem("kyc_redirect", true);
                if (action != 'profile') {
                    setTimeout(function () {
                        window.location.href = base_url + 'user/profile/edit?message=' + Base64.encode('Please Update Profile Details');
                    }, 1000);
                }
            }
            return false;
        } else if (kyc_list['email'] == 1) {
            console.log('trigger email verification');
            setTimeout(function () {
                verifyEmail();
            }, 1000);
            return false;
        } else if (kyc_list['mobile'] == 1) {
            console.log('trigger Mobile verification');
            setTimeout(function () {
                verifyMobile();
            }, 1000);
            return false;
        }
    }
    return true;
}

var verifyMobile = function () {
    showLoader();
    $.ajax({
        url: base_url + 'user/verifyMobile',
        type: 'POST',
        data: {Uid: ''},
        dataType: 'json',
        success: function (response) {
            console.info(response);
            if (response.error == false) {
                hideLoader();
                $('#load_modal_content').html(response.data);
                $('#commonModel').modal({show: true});
            } else {
                $('#commonModel').modal({show: false});
            }
        }
    });
}

var redeenLoyalty = function () {
    console.log('Redeem Initiated.......!');
    showLoader();
    var url = base_url + 'user/redeemLoyalty';
    var data = {Uid: Base64.decode(Uid)};
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (response) {
            console.info(response);
            if (response.error == false) {
                $('#load_modal_content').html(response.data);
                $('#commonModel').modal({show: true});
            } else {
                $('#load_modal_content').html(response.message);
                $('#commonModel').modal({show: true});
            }
            hideLoader();
        }
    });
}

var redeenFunChips = function () {
    console.log('redeenFunChips Initiated.......!');
    showLoader();
    var url = base_url + 'user/redeemFunChips';
    var data = {Uid: Base64.decode(Uid)};
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (response) {
            console.info(response);
            if (response.error == false) {
                $('#load_modal_content').html(response.data);
                $('#commonModel').modal({show: true});
            } else {
                $('#load_modal_content').html(response.message);
                $('#commonModel').modal({show: true});
            }
            hideLoader();
        }
    });
}

var InitAffilliateBonusClaim = function () {
    
    console.log('InitAffilliateClaim Initiated.......!');
    showLoader();
    var url = base_url + 'transaction/InitAffilliateBonusClaim';
    var data = {Uid: Base64.decode(Uid)};
    $.ajax({
        url: url,
        type: 'POST',
//        data: data,
        dataType: 'json',
        success: function (response) {
            console.info(response);
            if (response.error == false) {
                $('#load_modal_content').html(response.data);
                $('#commonModel').modal({show: true});
            } else {
                $('#load_modal_content').html(response.message);
                $('#commonModel').modal({show: true});
            }
            hideLoader();
        }
    });
}



var verifyEmail = function () {
    console.log('click Email...!');
    showLoader();
    $.ajax({
        url: base_url + 'user/verifyEmail',
        type: 'POST',
        dataType: 'json',
        data: {resend: false},
        success: function (response) {
            hideLoader();
            console.info(response);
            if (response.error == false) {
                $('#load_modal_content').html(response.data);
                $('#commonModel').modal({show: true});
            } else {
                $('#commonModel').modal({show: false});
            }
        }
    });
}

var getUserBalance = function () {

    $.ajax({
        url: base_url + 'user/getUserBalance',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            console.info(response);
            if (response.error == false) {
                var data_key;
                var data_value;
                for (var key in response.data.userBalance) {
                    if (response.data.userBalance.hasOwnProperty(key)) {
                        if (key === 'bonus') {
                            for (var k in response.data.userBalance[key]) {
                                console.log(k + " -> " + response.data.userBalance[key][k]);
                                data_key = k;
                                data_value = response.data.userBalance[key][k];
                            }
                        } else {
                            console.log(key + " -> " + response.data.userBalance[key]);
                            data_key = key;
                            if (data_key == 'Real_chips') {
                                data_value = '<i class="fa fa-inr" aria-hidden="true"></i>' + response.data.userBalance[key];
                            } else {
                                data_value = response.data.userBalance[key];
                            }

                        }
                    }
                    $('.' + data_key).html(data_value);

                }
                setTimeout(function () {
                    getUserBalance()
                }, 15000);
            }
        }
    });
}

var showLoader = function () {
    $('#show_loader').fadeIn();
}

var hideLoader = function () {
    $('#show_loader').fadeOut();
}


var functreloadchip = function () {

    console.log('Trigger for Tourney...!');
    console.log(sessionStorage.availabletournamentstatus);
    console.log(sessionStorage.gametype);
    if (sessionStorage.availabletournamentstatus && sessionStorage.availabletournamentstatus == 1 && (sessionStorage.pokergametype == 'stt' || sessionStorage.pokergametype == 'mtt') && sessionStorage.gametype != 'rummytor') {

        $.ajax({
            url: base_url + 'getmypokertournaments',
            type: 'GET',
            dataType: 'json',
            success: function (response) {

                console.log("getmypokertournaments", response);

                if (response.error != true) {

                    var chipsvalue = response.data.tournaments;
                    if (typeof chipsvalue !== 'undefined' && chipsvalue.length > 0) {
                        for (var i = 0; i < chipsvalue.length; i = i + 1) {

                            var values = new Array();
                            values['tournamentid'] = chipsvalue[i].poker_tournament_id;
                            values['gameid'] = chipsvalue[i].id;
                            values['roomname'] = chipsvalue[i].roomname;
                            values['popup_status'] = chipsvalue[i].popup_status;

                            console.log(values);

                            if (typeof values['tournamentid'] !== 'undefined' && values['tournamentid'] !== 'undefined' && values['tournamentid'] !== null && values['tournamentid'] !== '' && values['popup_status'] == 0) {
                                console.log("start tournaments ----- gameid: " + values['gameid'] + " tournamentid: " + values['tournamentid']);
                                poker_tournament_window(values['gameid'], values['tournamentid'], values['roomname']);
                            }
                            elements = null;
                            values = null;
                        }
                    }
                    chipsvalue = null;

                }
            }
        });

    } else if (sessionStorage.availabletournamentstatus && sessionStorage.availabletournamentstatus == 1 && sessionStorage.gametype == 'rummytor') {

        $.ajax({
            url: base_url + 'getmyrummytournaments',
            type: 'GET',
            dataType: 'json',
            success: function (response) {

                console.log("getmyrummytournaments", response);
                if (response.error != true) {
                    var chipsvalue = response.data.tournaments;
                    console.log("getmyrummytournaments chipsvalue", chipsvalue);
                    if (typeof chipsvalue !== 'undefined' && chipsvalue.length > 0) {
                        for (var i = 0; i < chipsvalue.length; i = i + 1) {
                            console.log("getmyrummytournaments chipsvalue[i]", chipsvalue[i]);
                            var values = new Array();
                            values['tournamentid'] = chipsvalue[i].rummy_tournament_id;
                            values['gameid'] = chipsvalue[i].Game_id; 
                            values['roomname'] = chipsvalue[i].roomname;
                            values['popup_status'] = chipsvalue[i].popup_status;

                            console.log("getmyrummytournaments values", values);

                            if (typeof values['tournamentid'] !== 'undefined' && values['tournamentid'] !== 'undefined' && values['tournamentid'] !== null && values['tournamentid'] !== '' && values['popup_status'] == 0) {
                                console.log("start tournaments ----- gameid: " + values['gameid'] + " tournamentid: " + values['tournamentid']);
                                rummy_tournament_window(values['gameid'], values['tournamentid'], values['roomname']);
                            }

                            elements = null;
                            values = null;
                        }
                    }
                    chipsvalue = null;

                }
            }
        });
    }
}

function poker_tournament_window(gameid, tournamentid, roomname) {
    
    console.log("poker_tournament_window ----- gameid: " + gameid + " tournamentid: " + tournamentid);
    var windowWidth = 906;
    var windowHeight = 680;
    var windowLeft = parseInt((screen.availWidth / 2) - (windowWidth / 2));
    var windowTop = parseInt((screen.availHeight / 2) - (windowHeight / 2));
    var windowSize = "width=" + windowWidth + ",height=" + windowHeight + "left=" + windowLeft + ",top=" + windowTop + "screenX=" + windowLeft + ",screenY=" + windowTop;
    var url = 'pokertournament?id=' + gameid + '&tournament=' + tournamentid + '&room=' + roomname;
    var windowName = "popUp";

    newwindow = window.open(url, "_blank", "toolbar=yes, location=no, directories=no, status=no, menubar=yes, scrollbars=no, resizable=no, copyhistory=yes, width=906, height=690");

    if (newwindow == null || typeof (newwindow) == "undefined" || newwindow.location.href == 'about:blank') {
        var msg = "Please enabled popups for this site to continue.";
        var message_type = 'E';
    } else {
        if (window.focus) {
            newwindow.focus();
        }
    }

}


function rummy_tournament_window(gameid, tournamentid, roomname) {

    console.log("rummy_tournament_window ----- gameid: " + gameid + " tournamentid: " + tournamentid);
    var windowWidth = 906;
    var windowHeight = 680;
    var windowLeft = parseInt((screen.availWidth / 2) - (windowWidth / 2));
    var windowTop = parseInt((screen.availHeight / 2) - (windowHeight / 2));
    var windowSize = "width=" + windowWidth + ",height=" + windowHeight + "left=" + windowLeft + ",top=" + windowTop + "screenX=" + windowLeft + ",screenY=" + windowTop;
    var url = 'rummytournament?id=' + gameid + '&tournament=' + tournamentid + '&room=' + roomname;
    var windowName = "popUp";


    newwindow = window.open(url, "_blank", "toolbar=yes, location=no, directories=no, status=no, menubar=yes, scrollbars=no, resizable=no, copyhistory=yes, width=906, height=690");

    if (newwindow == null || typeof (newwindow) == "undefined" || newwindow.location.href == 'about:blank') {
        var msg = "Please enabled popups for this site to continue.";
        var message_type = 'E';
        //messagewindow(msg,message_type);
    } else {
        if (window.focus) {
            newwindow.focus();
        }
    }
    //event.preventDefault();
}

function round(value, exp) {
    if (typeof exp === 'undefined' || +exp === 0)
        return Math.round(value);

    value = +value;
    exp = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
        return NaN;

    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}



var getDateDiff = function (date1, date2,show_alert) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1;
    var date2_ms = date2;

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);
    var months = Math.floor(days / 30);
 
    var date_diff = months + ' Month ' + hours + ' hours ' + minutes + ' minutes and ' + seconds + ' seconds';
    if(show_alert){
        $('#pokererrormsg').html('Game will starts in '+date_diff).show();
        showLobbyModel();

    }else{
        return date_diff;
    }
    console.log(date_diff);
}

//ValidateKyc();

 