// JavaScript source code


var cipher1, cipher2, cipher3, cipher4,cipher5,control1,control2,control3, flag;




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



}

function print() {
    /*console.log(cipher1[0]);
    console.log(cipher1[1]);
    console.log(cipher1[2]);
    */
}

function checkPos() {

    var array =
        [ cipher1, cipher2, cipher3, cipher4, cipher5 ];

    flag = 0;
    for (var i = 0; i < 5; i++) {

        for (var j = 0; j < 5; j++) {
            if (j != i) {
                if (array[i] == array[j])
                    flag = 1;
            }
            }
        
    }

   
    /*for (var i = 0; i < 9; i++) {

    }*/
}


function popup() {

    if (flag == 1) {
        alert("fucc");
    }


}