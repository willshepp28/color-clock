




(function() {


  // get body element
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var enterHex = document.getElementById('enterHex1');
    var enterHex2 = document.getElementById('enterHex2');
    var enterHex3 = document.getElementById('enterHex3');


    //00 01 00
    var redStrBase16 = '00';
    var greenStrBase16 = '00'
    var blueStrBase16 = 'cc'

    //00 01 00
    var redStrBase162 = 'cc';
    var greenStrBase162 = '00'
    var blueStrBase162 = 'bb'

    //00 01 00
    var redStrBase163 = '45';
    var greenStrBase163 = '00'
    var blueStrBase163 = 'ec'



  // change bodys background color every 50 ms

  function colorChange(section,hex,red,green,blue,speed) {
      setInterval(function() {


                var redIntBase10 = parseInt(red, 16)
                var greenIntBase10 = parseInt(green, 16)
                var blueIntBase10 = parseInt(blue, 16)


                redIntBase10++;
                greenIntBase10++
                blueIntBase10++

                if(redIntBase10 === 256){ redIntBase10 = 0}
                if(greenIntBase10 === 256){ greenIntBase10 = 0}
                if(blueIntBase10 === 256){ blueIntBase10 = 0}

                red = redIntBase10.toString(16)
                green = greenIntBase10.toString(16)
                blue = blueIntBase10.toString(16)



                var redStr = red
                var greenStr = green
                var blueStr = blue

                if(redIntBase10 < 16) redStr = '0' + red
                if(greenIntBase10 < 16) greenStr = '0' + green
                if(blueIntBase10 < 16) blueStr = '0' + blue

                var hexColorStr = '#' + redStr + greenStr + blueStr
                console.log('hexColor', hexColorStr)
                console.log('-----')
                section.style.backgroundColor = hexColorStr;
                hex.innerHTML = hexColorStr;
                hex.style.backgroundColor = hexColorStr;



      },speed);
} // end of colorChange

colorChange(section1,enterHex,redStrBase16, greenStrBase16, blueStrBase16,100);
colorChange(section2,enterHex2,redStrBase162, greenStrBase162, blueStrBase162,50);
colorChange(section3,enterHex3,redStrBase163, greenStrBase163, blueStrBase163,10);



})(); // end of IIFE





// function colorChange(section,hex,red,blue,green) {
//     setInterval(function() {
//
//
//
//
//
//               var redIntBase10 = parseInt(redStrBase16, 16)
//               var greenIntBase10 = parseInt(greenStrBase16, 16)
//               var blueIntBase10 = parseInt(blueStrBase16, 16)
//
//
//               redIntBase10++;
//               greenIntBase10++
//               blueIntBase10++
//
//               if(redIntBase10 === 256){ redIntBase10 = 0}
//               if(greenIntBase10 === 256){ greenIntBase10 = 0}
//               if(blueIntBase10 === 256){ blueIntBase10 = 0}
//
//               redStrBase16 = redIntBase10.toString(16)
//               greenStrBase16 = greenIntBase10.toString(16)
//               blueStrBase16 = blueIntBase10.toString(16)
//
//
//
//               var redStr = redStrBase16
//               var greenStr = greenStrBase16
//               var blueStr = blueStrBase16
//
//               if(redIntBase10 < 16) redStr = '0' + redStrBase16
//               if(greenIntBase10 < 16) greenStr = '0' + greenStrBase16
//               if(blueIntBase10 < 16) blueStr = '0' + blueStrBase16
//
//               var hexColorStr = '#' + redStr + greenStr + blueStr
//               console.log('hexColor', hexColorStr)
//               console.log('-----')
//               section1.style.backgroundColor = hexColorStr;
//               enterHex.innerHTML = hexColorStr;
//               enterHex.style.backgroundColor = hexColorStr;
//
//
//
//     },20);

// end of colorChange

  // colorChange();
