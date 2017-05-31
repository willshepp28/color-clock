




(function() {


  // get body element
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var enterHex = document.getElementById('enterHex1');
    //00 01 00
    var redStrBase16 = '00';
    var greenStrBase16 = '00'
    var blueStrBase16 = 'cc'


  // change bodys background color every 50 ms
    setInterval(function() {

      var redIntBase10 = parseInt(redStrBase16, 16)
      var greenIntBase10 = parseInt(greenStrBase16, 16)
      var blueIntBase10 = parseInt(blueStrBase16, 16)


      redIntBase10++;
      greenIntBase10++
      blueIntBase10++

      if(redIntBase10 === 256){ redIntBase10 = 0}
      if(greenIntBase10 === 256){ greenIntBase10 = 0}
      if(blueIntBase10 === 256){ blueIntBase10 = 0}

      redStrBase16 = redIntBase10.toString(16)
      greenStrBase16 = greenIntBase10.toString(16)
      blueStrBase16 = blueIntBase10.toString(16)



      var redStr = redStrBase16
      var greenStr = greenStrBase16
      var blueStr = blueStrBase16

      if(redIntBase10 < 16) redStr = '0' + redStrBase16
      if(greenIntBase10 < 16) greenStr = '0' + greenStrBase16
      if(blueIntBase10 < 16) blueStr = '0' + blueStrBase16

      var hexColorStr = '#' + redStr + greenStr + blueStr
      console.log('hexColor', hexColorStr)
      console.log('-----')
      section1.style.backgroundColor = hexColorStr;
      enterHex.innerHTML = hexColorStr;
      enterHex.style.backgroundColor = hexColorStr;




// Section 2 Color Changer
      function colorChange2() {


          // get elements
          var section2 = document.getElementById('section2');
          var enterHex = document.getElementById('enterHex2');


          // hex values
          var redStrBase16 = '00';
          var greenStrBase16 = '00'
          var blueStrBase16 = 'cc'

        var redIntBase10 = parseInt(redStrBase16, 16)
        var greenIntBase10 = parseInt(greenStrBase16, 16)
        var blueIntBase10 = parseInt(blueStrBase16, 16)


        redIntBase10++;
        greenIntBase10++
        blueIntBase10++

        if(redIntBase10 === 256){ redIntBase10 = 0}
        if(greenIntBase10 === 256){ greenIntBase10 = 0}
        if(blueIntBase10 === 256){ blueIntBase10 = 0}

        redStrBase16 = redIntBase10.toString(16)
        greenStrBase16 = greenIntBase10.toString(16)
        blueStrBase16 = blueIntBase10.toString(16)



        var redStr = redStrBase16
        var greenStr = greenStrBase16
        var blueStr = blueStrBase16

        if(redIntBase10 < 16) redStr = '0' + redStrBase16
        if(greenIntBase10 < 16) greenStr = '0' + greenStrBase16
        if(blueIntBase10 < 16) blueStr = '0' + blueStrBase16

        var hexColorStr = '#' + redStr + greenStr + blueStr
        console.log('hexColor', hexColorStr)
        console.log('-----')
        section2.style.backgroundColor = hexColorStr;
        enterHex.innerHTML = hexColorStr;
        enterHex.style.backgroundColor = hexColorStr;

      };


// Section 3 Color Changer
      function colorChange3() {

        // get elements
        var section3 = document.getElementById('section3');
        var enterHex = document.getElementById('enterHex3');


        // hex values
        var redStrBase16 = '00';
        var greenStrBase16 = '00'
        var blueStrBase16 = 'cc'

        var redIntBase10 = parseInt(redStrBase16, 16)
        var greenIntBase10 = parseInt(greenStrBase16, 16)
        var blueIntBase10 = parseInt(blueStrBase16, 16)


        redIntBase10++;
        greenIntBase10++
        blueIntBase10++

        if(redIntBase10 === 256){ redIntBase10 = 0}
        if(greenIntBase10 === 256){ greenIntBase10 = 0}
        if(blueIntBase10 === 256){ blueIntBase10 = 0}

        redStrBase16 = redIntBase10.toString(16)
        greenStrBase16 = greenIntBase10.toString(16)
        blueStrBase16 = blueIntBase10.toString(16)



        var redStr = redStrBase16
        var greenStr = greenStrBase16
        var blueStr = blueStrBase16

        if(redIntBase10 < 16) redStr = '0' + redStrBase16
        if(greenIntBase10 < 16) greenStr = '0' + greenStrBase16
        if(blueIntBase10 < 16) blueStr = '0' + blueStrBase16

        var hexColorStr = '#' + redStr + greenStr + blueStr
        console.log('hexColor', hexColorStr)
        console.log('-----')
        section3.style.backgroundColor = hexColorStr;
        enterHex.innerHTML = hexColorStr;
        enterHex.style.backgroundColor = hexColorStr;

      };

      colorChange2();
      colorChange3();



    },20);


})();
