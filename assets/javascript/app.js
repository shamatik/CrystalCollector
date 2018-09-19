var gemGame = {
    "scoreWin": 0,
    "scoreLose": 0,
    "counter":0,
    "targetNum": 0,
    "gemNumArr": [],
    "endFlag": false,

    "rndmNumGen": function(){
        var number = Math.floor(Math.random() * 40) + 12;
        $("#number-to-guess").text(number);
        console.log (number);
        gemGame.targetNum = number;
        return number;
    },

    "gemGen": function(){
        for (var i = 0; i < this.gemNumArr.length; i++) {

            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            //imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
           imageCrystal.attr("src", "assets/images/gem"+i+".png");
           imageCrystal.attr("width", "15%");
           imageCrystal.attr("height", "15%");
           

            imageCrystal.attr("data-crystalvalue", this.gemNumArr[i]);

            $("#crystals").append(imageCrystal);
          }

          $(".crystal-image").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            gemGame.counter += crystalValue;
            $("#counter").text(gemGame.counter);
            
            if (gemGame.counter==gemGame.targetNum){
                gemGame.endFlag = true;
                gemGame.gameWin();
               
            }
            else if (gemGame.counter>=gemGame.targetNum){
                gemGame.endFlag = true;
                gemGame.gameLose();
                
            }
        
          });
    },

    "gemNumGen": function(){
        //var numArr = [];
        for (var i=0 ;i<4 ;i++){
            var number1 = Math.floor(Math.random() * 12) + 1;
            var numPush = number1;
           this.gemNumArr.push(numPush);
            //console.log(numArr);
          
        };
        //return numArr;
    },

    "gameWin": function(){
        
            alert("You win!");
            gemGame.scoreWin++;
            $("#win").text(gemGame.scoreWin);
    },

    "gameLose": function(){
        
        alert("You lose!");
        gemGame.scoreLose++;
        $("#lose").text(gemGame.scoreLose);
},

    "restart": function(){
    
        this.counter = 0;
        $("#counter").text(gemGame.counter);
        this.gemNumArr = [];
        this.endFlag = false;
        gemGame.rndmNumGen();
        gemGame.gemNumGen();
        $("#crystals").empty();
        gemGame.gemGen();

    },

};

$(document).ready(function() { 
  
    gemGame.rndmNumGen();
    gemGame.gemNumGen();
    gemGame.gemGen();
    $("#win").text(gemGame.scoreWin);
    $("#lose").text(gemGame.scoreLose);
    $("#counter").text(gemGame.counter);
    $(".restart").on("click", function(){
        gemGame.restart();
    });

});