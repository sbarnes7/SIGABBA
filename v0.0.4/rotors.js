// JavaScript source code


var cipher1, cipher2, cipher3, cipher4,cipher5,control1,control2,control3,control4,control5, flag;
var index1, index2, index3, index4, index5;



function getPos(num) {
    var pos;
    var val;

    if (num == 0) {
        pos = document.getElementById("cipher1_pos");
    } else if (num == 1) {
        pos = document.getElementById("cipher2_pos");
    } else if (num == 2) {
        pos = document.getElementById("cipher3_pos");

    } else if (num == 3) {
        pos = document.getElementById("cipher4_pos");

    } else if (num == 4) {
        pos = document.getElementById("cipher5_pos");
    } else if (num == 5) {
        pos = document.getElementById("control1_pos");
    } else if (num == 6) {
        pos = document.getElementById("control2_pos");

    } else if (num == 7) {
        pos = document.getElementById("control3_pos");

    } else if (num == 8) {
        pos = document.getElementById("control4_pos");
    } else if (num == 9) {
        pos = document.getElementById("control5_pos");
    } else if (num == 10) {
        pos = document.getElementById("index1_pos");
    } else if (num == 11) {
        pos = document.getElementById("index2_pos");
    } else if (num == 12) {
        pos = document.getElementById("index3_pos");

    } else if (num == 13) {
        pos = document.getElementById("index4_pos");

    } else if (num == 14) {
        pos = document.getElementById("index5_pos");
    }
    val = pos.options[pos.selectedIndex].value;
    return val;

}


function getPlacement(num) {
    var place;
    var val;
    if (num == 0) {
        place = document.getElementById("cipher1_place");
    }
    val = place.options[place.selectedIndex].value;
    return val;

}

function getStart(num) {
    var start;
    var val;
    if (num == 0) {
        start = document.getElementById("cipher1_start");
    }
    val = start.options[start.selectedIndex].value;
    return val;

}


function initialize() {
   /* cipher1 = [getPos(0), getPlacement(0), getStart(0)];
    cipher2 = [getPos(2), getPlacement(2), getStart(2)];
    cipher3 = [getPos(2), getPlacement(2), getStart(2)];
    cipher4 = [getPos(3), getPlacement(3), getStart(3)];
    cipher5 = [getPos(4), getPlacement(4), getStart(4)];
    */

    cipher1 = getPos(0);
    cipher2 = getPos(1);
    cipher3 = getPos(2);
    cipher4 = getPos(3);
    cipher5 = getPos(4);
    control1 = getPos(5);
    control2 = getPos(6);
    control3 = getPos(7);
    control4 = getPos(8);
    control5 = getPos(9);
    index1 = getPos(10);
    index2 = getPos(11);
    index3 = getPos(12);
    index4 = getPos(13);
    index5 = getPos(14);
}

function print() {
    /*console.log(cipher1[0]);
    console.log(cipher1[1]);
    console.log(cipher1[2]);
    */
}

function checkPos() {

    var control_cipher_arr =
        [ cipher1, cipher2, cipher3, cipher4, cipher5, control1, control2, control3, control4,control5];

    var index_arr =
        [index1, index2, index3, index4, index5];

    flag = 0;
    for (var i = 0; i < control_cipher_arr.length; i++) {

        for (var j = 0; j < control_cipher_arr.length; j++) {
            if (j != i) {
                if (control_cipher_arr[i] == control_cipher_arr[j])
                    flag = 1;
            }
            }
        
    }

    for (var i = 0; i < index_arr.length; i++) {

        for (var j = 0; j < index_arr.length; j++) {
            if (j != i) {
                if (index_arr[i] == index_arr[j])
                    flag = 1;
            }
        }

    }
}


function popup() {

    if (flag == 1) {
        alert("Invalid Rotor Positions. Each Control/Cipher Rotor must have different rotor numbers. Same rule applies for the Index Rotors");
        document.getElementById("link").className = "unactivated";
    } else {

        document.getElementById("link").className = "activated";
    }


}