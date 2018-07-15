var random_result = 
var lost = 0;
var win = 0;
var previous = 0;
//Setters
//Getters


var startGame = function () {
   var resetAndStart = function () {}
   random_result = Math.floor(Math.random() * 120) + 19;
    $("#result").html('Random Result:' + random_result);
    
    
    for (var i=0; i < 4; i++)   {
       var random = Math.floor(Math.random() * 11) + 1;
       var crystal = $("<div>");
       crystal.attr({
          "class": 'crystal',
        "data-random": random 
       });
       
       $(".crystals").append(crystal);
                
      } 
}

startGame();
$(doucument).on('click' ".crystal", function() {
    var num = parseInt($(this).attr('data-random'));
    previous += num;
    console.log(previous);

if (previous > random_result) {
    lost--;
  $("#lost").html(lost);

  resetAndStart();
}
else if(previous === random_result) {
    win++;
    $("#win").html(win);
    resetAndStart();
    console.log("You win!");
}
});

//Every crystal needs to have a random number that is between 1 to 12.
//A new random number should be generated every time the user wins or loses
//When clicking any crystal, it should be adding to the previous number
//Until it equals to the total score
//If the total score is greater than the random result, we decrement a lost counter
//If the total score is equal, then we increment a win counter




