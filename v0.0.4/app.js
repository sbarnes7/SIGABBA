
function setRotors() {
    var ciph, contr, ind;
    var place;
    var i;

    ciph = document.getElementsByClassName("cipher");
    contr = document.getElementsByClassName("control");
    ind = document.getElementsByClassName("index");


   place = document.getElementsByClassName("placement");
  

  
    for (i in a) {

        //PUSH EVERYTHING INTO ARRAYS 
    }

    console.log(Cwheel_orientation);
   


}
function linearSearch(array, toFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind)
            return i;
    }
    return -1;
}


//THESE ARE THE SAME EACH TIME:
//inner wirings for cipher and control rotors (rand num 0 to 25):
var Cwiring0 = [6, 11, 25, 22, 24, 23, 10, 17, 16, 7, 9, 8, 19, 21, 12, 1, 4, 5, 3, 2, 0, 20, 15, 14, 18, 13];
var Cwiring1 = [22, 10, 20, 25, 14, 6, 9, 16, 4, 15, 23, 3, 12, 7, 13, 0, 1, 17, 24, 11, 2, 21, 5, 19, 8, 18];
var Cwiring2 = [9, 3, 23, 2, 8, 13, 11, 6, 10, 24, 15, 21, 25, 17, 14, 16, 5, 19, 1, 7, 18, 0, 4, 20, 12, 22];
var Cwiring3 = [21, 12, 8, 16, 19, 5, 18, 20, 9, 24, 4, 23, 11, 2, 22, 15, 13, 1, 25, 3, 10, 0, 17, 6, 7, 14];
var Cwiring4 = [16, 15, 20, 1, 4, 0, 17, 2, 12, 6, 18, 3, 8, 22, 24, 9, 7, 10, 25, 14, 23, 13, 11, 19, 21, 5];
var Cwiring5 = [19, 2, 16, 15, 24, 7, 22, 21, 1, 9, 5, 14, 6, 8, 12, 3, 11, 20, 25, 13, 23, 4, 18, 0, 10, 17];
var Cwiring6 = [7, 4, 18, 11, 20, 22, 23, 6, 9, 14, 10, 5, 12, 19, 1, 8, 2, 16, 0, 24, 17, 15, 3, 25, 21, 13];
var Cwiring7 = [8, 19, 1, 14, 20, 4, 16, 12, 23, 13, 25, 3, 22, 21, 5, 18, 0, 9, 2, 15, 11, 6, 17, 7, 24, 10];
var Cwiring8 = [6, 18, 8, 2, 16, 12, 13, 22, 9, 10, 4, 17, 3, 19, 11, 21, 15, 14, 23, 7, 20, 25, 1, 5, 0, 24];
var Cwiring9 = [3, 14, 22, 16, 10, 15, 23, 19, 4, 18, 24, 11, 0, 6, 20, 12, 2, 1, 9, 21, 17, 13, 25, 8, 5, 7];

var Cwirings = [Cwiring0, Cwiring1, Cwiring2, Cwiring3, Cwiring4, Cwiring5, Cwiring6, Cwiring7, Cwiring8, Cwiring9];

//inner wirings for index rotors (rand num 0 1o 9):
var Iwiring0 = [0, 7, 4, 6, 9, 5, 8, 2, 1, 3];
var Iwiring1 = [1, 7, 3, 9, 5, 8, 0, 4, 6, 2];
var Iwiring2 = [5, 7, 4, 8, 0, 6, 2, 3, 1, 9];
var Iwiring3 = [9, 4, 6, 2, 0, 3, 7, 8, 1, 5];
var Iwiring4 = [5, 0, 6, 8, 2, 4, 3, 7, 9, 1];

var Iwirings = [Iwiring0, Iwiring1, Iwiring2, Iwiring3, Iwiring4];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//current values of the cipher wheels
var cipher_wheel0 = [];
var cipher_wheel1 = [];
var cipher_wheel2 = [];
var cipher_wheel3 = [];
var cipher_wheel4 = [];

//current values of the control wheels
var control_wheel0 = [];
var control_wheel1 = [];
var control_wheel2 = [];
var control_wheel3 = [];
var control_wheel4 = [];

//current values of the index wheels
var index_wheel0 = [];
var index_wheel1 = [];
var index_wheel2 = [];
var index_wheel3 = [];
var index_wheel4 = [];
//---------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------//
//THESE CHANGE PER USER CONFIG:
//identify which rotors are sitting where

var control_rotors =[];
var cipher_rotors = [];
var index_rotors = [];


//which digit is on top of each rotor
var cipher_tops= [];
var control_tops = [];
var index_tops = [];
//...or...we might want to keep an entire array so we can talk reference each char

var Cwheel_orientation = [];
//IGNORED FOR NOW:
//the orientation of each wheel (1 = step forward A>B -1= step backward B>A]
var Cwheel_orientation = [];
var local = localStorage["preset"];
if (local == 4) {
   // console.log("\n\n\nTHIS WORKED HELLO LOOK AT ME!\n\n\n\n");

    /*
    var control_rotors = [0, 1, 2, 3, 4];
    var cipher_rotors = [5, 6, 7, 8, 9];
    var index_rotors = [0, 1, 2, 3, 4];



    //which digit is on top of each rotor
    var cipher_tops = [1, 3, 5, 7, 9];
    var control_tops = [0, 2, 4, 6, 8];
    var index_tops = [9, 1, 2, 3, 4];
    //...or...we might want to keep an entire array so we can talk reference each char

    //IGNORED FOR NOW:
    //the orientation of each wheel (1 = step forward A>B -1= step backward B>A]
    var Cwheel_orientation = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    
    */
}
//use these to build up the array of the wirings:
var Control_Wheels_Wiring = [Cwirings[control_rotors[0]], Cwirings[control_rotors[1]], Cwirings[control_rotors[2]], Cwirings[control_rotors[3]], Cwirings[control_rotors[4]]];
var Cipher_Wheels_Wiring = [Cwirings[cipher_rotors[0]], Cwirings[cipher_rotors[1]], Cwirings[cipher_rotors[2]], Cwirings[cipher_rotors[3]], Cwirings[cipher_rotors[4]]];
var Index_Wheels_Wiring = [Iwirings[index_rotors[0]], Iwirings[index_rotors[1]], Iwirings[index_rotors[2]], Iwirings[index_rotors[3]], Iwirings[index_rotors[4]]];

//---------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------//
//BEGIN ENCRYPTION
var plainText;
plainText = 'A';
var plainNum = linearSearch(alphabet, plainText);
//console.log("Plain number %d", plainNum);
//... do the translation ...



//figure out what the order of the wheel is (do this every time a letter is encoded)
var i;
for (i = 0; i < 26; i += 1) {
    //update all the cipher rotors:
    cipher_wheel0[i] = (cipher_tops[0] + i) % 26;
    cipher_wheel1[i] = (cipher_tops[1] + i) % 26;
    cipher_wheel2[i] = (cipher_tops[2] + i) % 26;
    cipher_wheel3[i] = (cipher_tops[3] + i) % 26;
    cipher_wheel4[i] = (cipher_tops[4] + i) % 26;

    //update all the control rotors:
    control_wheel0[i] = (control_tops[0] + i) % 26;
    control_wheel1[i] = (control_tops[1] + i) % 26;
    control_wheel2[i] = (control_tops[2] + i) % 26;
    control_wheel3[i] = (control_tops[3] + i) % 26;
    control_wheel4[i] = (control_tops[4] + i) % 26;
    //console.log(control_tops[4]);
    //console.log(i);

    //update all the index rotors:
    index_wheel0[i] = (index_tops[0] + i) % 10;
    index_wheel1[i] = (index_tops[1] + i) % 10;
    index_wheel2[i] = (index_tops[2] + i) % 10;
    index_wheel3[i] = (index_tops[3] + i) % 10;
    index_wheel4[i] = (index_tops[4] + i) % 10;
}


cipher_bank = [cipher_wheel0, cipher_wheel1, cipher_wheel2, cipher_wheel3, cipher_wheel4];
control_bank = [control_wheel0, control_wheel1, control_wheel2, control_wheel3, control_wheel4];
index_bank = [index_wheel0, index_wheel1, index_wheel2, index_wheel3, index_wheel4];

//console.log("\nCipher wheels at the beginning:");
//console.log(cipher_bank);

//Run the plain text letter through:
//console.log("\nBelow is how it passes the plaintext signal through to get ciphertext");
var value = plainNum;
for (i = 0; i < 5; i++) {
  //  console.log("%d is mapped to...", value);
    value = Cipher_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
//console.log("Resulting cipher number: %d", value);
var cipherText = alphabet[value];
//console.log("Final letter: %s", cipherText);


//send F, G, H, I in to the control rotor
var pos_of_F;
var pos_of_G;
var pos_of_H;
var pos_of_I;

var control_signals = [5, 6, 7, 8];
var index_active_signals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var index_active_signals_out = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//pos_of_F will tell you where on cipher wheel 4 F, G, H, I are
pos_of_F = linearSearch(control_bank[4], 5);
pos_of_G = linearSearch(control_bank[4], 6);
pos_of_H = linearSearch(control_bank[4], 7);
pos_of_I = linearSearch(control_bank[4], 8);
//console.log("Where F sits on control wheel 4")
//console.log(pos_of_F);
//console.log("Where G sits on control wheel 4")
//console.log(pos_of_G);
//console.log("Where H sits on control wheel 4")
//console.log(pos_of_H);
//console.log("Where I sits on control wheel 4")
console.log(pos_of_I);

//console.log("\n");
//run F through
//console.log("STEPPING F THROUGH");
var value = pos_of_F;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[0] = value;

//run G through
//console.log("\nSTEPPING G THROUGH");
var value = pos_of_G;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
   // console.log("%d\n", value);
}
control_signals[1] = value;

//run H through
//console.log("\nSTEPPING H THROUGH");
var value = pos_of_H;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[2] = value;


//run I through
//console.log("\nSTEPPING I THROUGH");
var value = pos_of_I;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[3] = value;


//console.log('These were the resulting signals from the control rotor:');
//console.log(control_signals);

//check if the first one will be active:
if (linearSearch(control_signals, 1) != -1)
    index_active_signals[1] = 1;
if (linearSearch(control_signals, 2) != -1)
    index_active_signals[2] = 1;
if (linearSearch(control_signals, 3) != -1 || linearSearch(control_signals, 4) != -1)
    index_active_signals[3] = 1;
if (linearSearch(control_signals, 5) != -1 || linearSearch(control_signals, 6) != -1 || linearSearch(control_signals, 7) != -1)
    index_active_signals[4] = 1;
if (linearSearch(control_signals, 8) != -1 || linearSearch(control_signals, 9) != -1 || linearSearch(control_signals, 10) != -1)
    index_active_signals[5] = 1;
if (linearSearch(control_signals, 11) != -1 || linearSearch(control_signals, 12) != -1 || linearSearch(control_signals, 13) != -1 || linearSearch(control_signals, 14) != -1)
    index_active_signals[6] = 1;
if (linearSearch(control_signals, 15) != -1 || linearSearch(control_signals, 16) != -1 || linearSearch(control_signals, 17) != -1 || linearSearch(control_signals, 18) != -1 || linearSearch(control_signals, 19) != -1)
    index_active_signals[7] = 1;
if (linearSearch(control_signals, 20) != -1 || linearSearch(control_signals, 21) != -1 || linearSearch(control_signals, 22) != -1 || linearSearch(control_signals, 23) != -1 || linearSearch(control_signals, 24) != -1 || linearSearch(control_signals, 25) != -1)
    index_active_signals[8] = 1;
if (linearSearch(control_signals, 0) != -1)
    index_active_signals[9] = 1;

//console.log("Based on the signals, these are the active index signals");
//console.log(index_active_signals);
var pos;
var j;

for (i = 0; i < 10; i++) {
    if (index_active_signals[i] == 1) {
        
    //    console.log("\n%d is active so we will look for its position",i);
        position = linearSearch(index_bank[0], i);
  //      console.log("%d is the position of it on the index wheel", position);

        value = position;
        for (j = 0; j < 5; j++) {
            value = Index_Wheels_Wiring[j][value]
    //        console.log("%d is the wiring",value);
        }
  //      console.log("%d is the final wiring stored in %d", value,i );
        index_active_signals_out[i] = value;
    }
}

//console.log("\nThese are the signals sent out of index bank...ignore 0s");
//console.log(index_active_signals_out);


//console.log("Cipher tops were...");
//console.log(cipher_tops);
if (linearSearch(index_active_signals_out, 0) != -1 || linearSearch(index_active_signals_out, 9) != -1) {
  //  console.log("Cipher wheel 0 will step");
    cipher_tops[0] = (cipher_tops[0] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 7) != -1 || linearSearch(index_active_signals_out, 8) != -1) {
    //console.log("Cipher wheel 1 will step");
    cipher_tops[1] = (cipher_tops[1] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 5) != -1 || linearSearch(index_active_signals_out, 6) != -1) {
    //console.log("Cipher wheel 2 will step");
    cipher_tops[2] = (cipher_tops[2] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 3) != -1 || linearSearch(index_active_signals_out, 4) != -1) {
//    console.log("Cipher wheel 3 will step");
    cipher_tops[3] = (cipher_tops[3] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 1) != -1 || linearSearch(index_active_signals_out, 2) != -1) {
  //  console.log("Cipher wheel 4 will step");
    cipher_tops[4] = (cipher_tops[4] + 1) % 26;
}

//console.log("Cipher tops are...")
//console.log(cipher_tops);



//Now that everything is over, we need to step one of the cipher wheels forward


//No matter what, step the fast control rotor
//console.log("\nBefore the Final Control bank stepping");
//console.log(control_tops);
control_tops[2] = control_tops[2] + Cwheel_orientation[control_rotors[2]];
//console.log("After the Final Control bank stepping");
console.log(control_tops);

if (control_tops[2] - Cwheel_orientation[control_rotors[2]] == 14) {
  //  console.log("we will step the medium control");
    control_tops[3] = control_tops[3] + Cwheel_orientation[control_rotors[3]];

    if (control_tops[3] - Cwheel_orientation[control_rotors[3]] == 14) {
  //  console.log("we will step the slow control");
    control_tops[1] = control_tops[1] + Cwheel_orientation[control_rotors[1]];
    }
}




//DECRYPTION:

var Cwiring0 = [6, 11, 25, 22, 24, 23, 10, 17, 16, 7, 9, 8, 19, 21, 12, 1, 4, 5, 3, 2, 0, 20, 15, 14, 18, 13];
var Cwiring1 = [22, 10, 20, 25, 14, 6, 9, 16, 4, 15, 23, 3, 12, 7, 13, 0, 1, 17, 24, 11, 2, 21, 5, 19, 8, 18];
var Cwiring2 = [9, 3, 23, 2, 8, 13, 11, 6, 10, 24, 15, 21, 25, 17, 14, 16, 5, 19, 1, 7, 18, 0, 4, 20, 12, 22];
var Cwiring3 = [21, 12, 8, 16, 19, 5, 18, 20, 9, 24, 4, 23, 11, 2, 22, 15, 13, 1, 25, 3, 10, 0, 17, 6, 7, 14];
var Cwiring4 = [16, 15, 20, 1, 4, 0, 17, 2, 12, 6, 18, 3, 8, 22, 24, 9, 7, 10, 25, 14, 23, 13, 11, 19, 21, 5];
var Cwiring5 = [19, 2, 16, 15, 24, 7, 22, 21, 1, 9, 5, 14, 6, 8, 12, 3, 11, 20, 25, 13, 23, 4, 18, 0, 10, 17];
var Cwiring6 = [7, 4, 18, 11, 20, 22, 23, 6, 9, 14, 10, 5, 12, 19, 1, 8, 2, 16, 0, 24, 17, 15, 3, 25, 21, 13];
var Cwiring7 = [8, 19, 1, 14, 20, 4, 16, 12, 23, 13, 25, 3, 22, 21, 5, 18, 0, 9, 2, 15, 11, 6, 17, 7, 24, 10];
var Cwiring8 = [6, 18, 8, 2, 16, 12, 13, 22, 9, 10, 4, 17, 3, 19, 11, 21, 15, 14, 23, 7, 20, 25, 1, 5, 0, 24];
var Cwiring9 = [3, 14, 22, 16, 10, 15, 23, 19, 4, 18, 24, 11, 0, 6, 20, 12, 2, 1, 9, 21, 17, 13, 25, 8, 5, 7];

var Cwirings = [Cwiring0, Cwiring1, Cwiring2, Cwiring3, Cwiring4, Cwiring5, Cwiring6, Cwiring7, Cwiring8, Cwiring9];


control_rotors = [0, 1, 2, 3, 4];
cipher_rotors = [5, 6, 7, 8, 9];
index_rotors = [0, 1, 2, 3, 4];

//use these to build up the array of the wirings:
Control_Wheels_Wiring = [Cwirings[control_rotors[0]], Cwirings[control_rotors[1]], Cwirings[control_rotors[2]], Cwirings[control_rotors[3]], Cwirings[control_rotors[4]]];
Cipher_Wheels_Wiring = [Cwirings[cipher_rotors[0]], Cwirings[cipher_rotors[1]], Cwirings[cipher_rotors[2]], Cwirings[cipher_rotors[3]], Cwirings[cipher_rotors[4]]];
Index_Wheels_Wiring = [Iwirings[index_rotors[0]], Iwirings[index_rotors[1]], Iwirings[index_rotors[2]], Iwirings[index_rotors[3]], Iwirings[index_rotors[4]]];


//which digit is on top of each rotor
cipher_tops = [1, 3, 5, 7, 9];
control_tops = [0, 2, 4, 6, 8];
index_tops = [9, 1, 2, 3, 4];
//...or...we might want to keep an entire array so we can talk reference each char

//IGNORED FOR NOW:
//the orientation of each wheel (1 = step forward A>B -1= step backward B>A]
Cwheel_orientation = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
Iwheel_orientation = [-1, -1, -1, -1, -1];



//---------------------------------------------------------------------------------------------//
//BEGIN DECRYPTION
//console.log("\n\n--------BEGIN DECRYPTION---------");
//console.log("cipher text ", cipherText);

plainNum = linearSearch(alphabet, cipherText);
//console.log("Plain number %d", plainNum);
//... do the translation ...

//console.log("\nCipher wheels at the beginning of decryption:");
console.log(cipher_bank);

//figure out what the order of the wheel is (do this every time a letter is decoded)
var i;
for (i = 0; i < 26; i += 1) {
    //update all the cipher rotors:
    cipher_wheel0[i] = (cipher_tops[0] + i) % 26;
    cipher_wheel1[i] = (cipher_tops[1] + i) % 26;
    cipher_wheel2[i] = (cipher_tops[2] + i) % 26;
    cipher_wheel3[i] = (cipher_tops[3] + i) % 26;
    cipher_wheel4[i] = (cipher_tops[4] + i) % 26;

    //update all the control rotors:
    control_wheel0[i] = (control_tops[0] + i) % 26;
    control_wheel1[i] = (control_tops[1] + i) % 26;
    control_wheel2[i] = (control_tops[2] + i) % 26;
    control_wheel3[i] = (control_tops[3] + i) % 26;
    control_wheel4[i] = (control_tops[4] + i) % 26;
    //console.log(control_tops[4]);
    //console.log(i);

    //update all the index rotors:
    index_wheel0[i] = (index_tops[0] + i) % 10;
    index_wheel1[i] = (index_tops[1] + i) % 10;
    index_wheel2[i] = (index_tops[2] + i) % 10;
    index_wheel3[i] = (index_tops[3] + i) % 10;
    index_wheel4[i] = (index_tops[4] + i) % 10;
}


cipher_bank = [cipher_wheel0, cipher_wheel1, cipher_wheel2, cipher_wheel3, cipher_wheel4];
control_bank = [control_wheel0, control_wheel1, control_wheel2, control_wheel3, control_wheel4];
index_bank = [index_wheel0, index_wheel1, index_wheel2, index_wheel3, index_wheel4];

//Run the plain text letter through:
//console.log("\nBelow is how it passes the plaintext signal through to get ciphertext");
var value = plainNum;
for (i = 4; i >= 0; i--) {
    //console.log("%d comes from...", value);
    value = linearSearch(Cipher_Wheels_Wiring[i], value);
  //  console.log("%d\n", value);
}
//console.log("Resulting plain number: %d", value);
var plainText = alphabet[value];
//console.log("Final letter: %s", plainText);


//send F, G, H, I in to the control rotor
control_signals = [5, 6, 7, 8];
index_active_signals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
index_active_signals_out = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//pos_of_F will tell you where on cipher wheel 4 F, G, H, I are
pos_of_F = linearSearch(control_bank[4], 5);
pos_of_G = linearSearch(control_bank[4], 6);
pos_of_H = linearSearch(control_bank[4], 7);
pos_of_I = linearSearch(control_bank[4], 8);
/*
console.log("Where F sits on control wheel 4")
console.log(pos_of_F);
console.log("Where G sits on control wheel 4")
console.log(pos_of_G);
console.log("Where H sits on control wheel 4")
console.log(pos_of_H);
console.log("Where I sits on control wheel 4")
console.log(pos_of_I);
*/
//console.log("\n");
//run F through
//console.log("STEPPING F THROUGH");
var value = pos_of_F;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[0] = value;

//run G through
//console.log("\nSTEPPING G THROUGH");
var value = pos_of_G;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[1] = value;

//run H through
//console.log("\nSTEPPING H THROUGH");
var value = pos_of_H;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[2] = value;


//run I through
//console.log("\nSTEPPING I THROUGH");
var value = pos_of_I;
for (i = 4; i >= 0; i--) {
  //  console.log("%d is mapped to...", value);
    value = Control_Wheels_Wiring[i][value]
    //console.log("%d\n", value);
}
control_signals[3] = value;


//console.log('These were the resulting signals from the control rotor:');
console.log(control_signals);

//check if the first one will be active:
if (linearSearch(control_signals, 1) != -1)
    index_active_signals[1] = 1;
if (linearSearch(control_signals, 2) != -1)
    index_active_signals[2] = 1;
if (linearSearch(control_signals, 3) != -1 || linearSearch(control_signals, 4) != -1)
    index_active_signals[3] = 1;
if (linearSearch(control_signals, 5) != -1 || linearSearch(control_signals, 6) != -1 || linearSearch(control_signals, 7) != -1)
    index_active_signals[4] = 1;
if (linearSearch(control_signals, 8) != -1 || linearSearch(control_signals, 9) != -1 || linearSearch(control_signals, 10) != -1)
    index_active_signals[5] = 1;
if (linearSearch(control_signals, 11) != -1 || linearSearch(control_signals, 12) != -1 || linearSearch(control_signals, 13) != -1 || linearSearch(control_signals, 14) != -1)
    index_active_signals[6] = 1;
if (linearSearch(control_signals, 15) != -1 || linearSearch(control_signals, 16) != -1 || linearSearch(control_signals, 17) != -1 || linearSearch(control_signals, 18) != -1 || linearSearch(control_signals, 19) != -1)
    index_active_signals[7] = 1;
if (linearSearch(control_signals, 20) != -1 || linearSearch(control_signals, 21) != -1 || linearSearch(control_signals, 22) != -1 || linearSearch(control_signals, 23) != -1 || linearSearch(control_signals, 24) != -1 || linearSearch(control_signals, 25) != -1)
    index_active_signals[8] = 1;
if (linearSearch(control_signals, 0) != -1)
    index_active_signals[9] = 1;

//console.log("Based on the signals, these are the active index signals");
console.log(index_active_signals);
var pos;
var j;

for (i = 0; i < 10; i++) {
    if (index_active_signals[i] == 1) {

    //    console.log("\n%d is active so we will look for its position", i);
        position = linearSearch(index_bank[0], i);
  //      console.log("%d is the position of it on the index wheel", position);

        value = position;
        for (j = 0; j < 5; j++) {
            value = Index_Wheels_Wiring[j][value]
    //        console.log("%d is the wiring", value);
        }
  //      console.log("%d is the final wiring stored in %d", value, i);
        index_active_signals_out[i] = value;
    }
}

//console.log("\nThese are the signals sent out of index bank...ignore 0s");
//console.log(index_active_signals_out);


//console.log("Cipher tops were...");
//console.log(cipher_tops);
if (linearSearch(index_active_signals_out, 0) != -1 || linearSearch(index_active_signals_out, 9) != -1) {
    //console.log("Cipher wheel 0 will step");
    cipher_tops[0] = (cipher_tops[0] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 7) != -1 || linearSearch(index_active_signals_out, 8) != -1) {
    //console.log("Cipher wheel 1 will step");
    cipher_tops[1] = (cipher_tops[1] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 5) != -1 || linearSearch(index_active_signals_out, 6) != -1) {
    //console.log("Cipher wheel 2 will step");
    cipher_tops[2] = (cipher_tops[2] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 3) != -1 || linearSearch(index_active_signals_out, 4) != -1) {
    //console.log("Cipher wheel 3 will step");
    cipher_tops[3] = (cipher_tops[3] + 1) % 26;
}
if (linearSearch(index_active_signals_out, 1) != -1 || linearSearch(index_active_signals_out, 2) != -1) {
  //  console.log("Cipher wheel 4 will step");
    cipher_tops[4] = (cipher_tops[4] + 1) % 26;
}

//console.log("Cipher tops are...")
//console.log(cipher_tops);


//Now that everything is over, we need to step one of the cipher wheels forward


//No matter what, step the fast control rotor
/*console.log("\nBefore the Final Control bank stepping");
console.log(control_tops);
control_tops[2] = control_tops[2] + Cwheel_orientation[control_rotors[2]];
console.log("After the Final Control bank stepping");
console.log(control_tops);
*/
if (control_tops[2] - Cwheel_orientation[control_rotors[2]] == 14) {
    //console.log("we will step the medium control");
    control_tops[3] = control_tops[3] + Cwheel_orientation[control_rotors[3]];

    if (control_tops[3] - Cwheel_orientation[control_rotors[3]] == 14) {
      //  console.log("we will step the slow control");
        control_tops[1] = control_tops[1] + Cwheel_orientation[control_rotors[1]];
    }
}
