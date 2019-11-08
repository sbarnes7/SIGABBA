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

function setRotors() {
    var ciph, contr, ind;
    var place;
    var i;
    var ciph_place, contr_place, ind_place;
    ciph = document.getElementsByClassName("cipher");
    contr = document.getElementsByClassName("control");
    ind = document.getElementsByClassName("index");

    place = document.getElementsByClassName("placement");

    ciph_place = document.getElementsByClassName("ciph_start");
    contr_place = document.getElementsByClassName("contr_start");
    ind_place = document.getElementsByClassName("ind_start");


    var cipher_tops = ["0","0","0","0","0"];
    var control_tops = ["0","0","0","0","0"];
    var index_tops = ["0","0","0","0","0"];

    for (i = 0; i < 5; i++) {
        cipher_tops[i] = ciph_place[i].value;

    }

    for (i = 0; i < 5; i++) {
        control_tops[i] = contr_place[i].value;
    }

    for (i = 0; i < 5; i++) {
        index_tops[i] =ind_place[i].value;
    }

    /*
        //which digit is on top of each rotor
        cipher_tops = [];
        control_tops = [];
         index_tops = [];*/

    var cipher_rotors = ["0","0","0","0","0"];
    var control_rotors = ["0", "0", "0", "0", "0"];
    var index_rotors = ["0", "0", "0", "0", "0"];

    for (i = 0; i < 5; i++ ) {
        cipher_rotors[i] = ciph[i].value;
    }
    for (i = 0; i < 5; i++) {
        control_rotors[i] = contr[i].value;
    }
    for (i = 0; i < 5; i++) {
        index_rotors[i] = ind[i].value;
    }


   
    var Cwheel_orientation = ["0", "0", "0", "0", "0","0", "0", "0", "0", "0"];
    for (i = 0; i < 10; i++) {
        if (i < 5) {
            Cwheel_orientation[cipher_rotors[i]] = place[i].value;

        } else {
            Cwheel_orientation[control_rotors[i - 5]] = place[i].value;

        }


    }

    console.log("Cipher Start numbers", cipher_tops);
    console.log("Control Start numbers", control_tops);
    console.log("Index Start numbers", index_tops);

    console.log("Wheels Orientation", Cwheel_orientation);

    console.log("Cipher Rotor numbers", cipher_rotors);
    console.log("Control Rotor numbers", control_rotors);
    console.log("Index Rotor numbers", index_rotors);

    /*
    console.log(cipher_rotors);
    console.log(control_rotors);
    console.log(index_rotors);*/


    localStorage.setItem("cipher_tops", JSON.stringify(cipher_tops));
    localStorage.setItem("control_tops", JSON.stringify(control_tops));
    localStorage.setItem("index_tops", JSON.stringify(index_tops));
    
    //localStorage["index_tops"] = index_tops;
    localStorage.setItem("Cwheel_orientation", JSON.stringify(Cwheel_orientation));
    //localStorage["Cwheel_orientation"] = Cwheel_orientation;
    /*
    localStorage["cipher_rotors"] = cipher_rotors;
    localStorage["control_rotors"] = control_rotors;
    localStorage["index_rotors"] = index_rotors;
    */

    localStorage.setItem("cipher_rotors", JSON.stringify(cipher_rotors));
    localStorage.setItem("control_rotors", JSON.stringify(control_rotors));
    localStorage.setItem("index_rotors", JSON.stringify(index_rotors));

}