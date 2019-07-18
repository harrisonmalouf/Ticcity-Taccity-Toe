console.log("run");

$(document).ready(function (){


// this will be the empty array which'll push all of our choices into from a player1
const player1 = [];

// we'll push player2s' answer in here
const player2 = [];

let results;

let click = 0;

$(".fieldTokens").on("click", function() {
    if ( click % 2 == 0) {
      player1.push($(this).attr("id"));
      $(this).text('X');
      $(this).off("click");
      console.log('answer1', player1);
    } else {
        player2.push($(this).attr("id"));
        $(this).text('O');
        $(this).off("click");
        console.log("answer2", player2);
    }
// else if(answer2.length => 3) {
//     console.log("draw")
//   }
    click += 1 ;

     const x = findWinner(player1);
     const o =  findWinner(player2);
// the seperate if statements allow us to break down the statements insteading of using else if or else.
if ( x === true ) {
  console.log("X Wins!");
  results = "X Wins!";
  $('h3').text(`${results}`);
}
if ( o === true) {
    console.log("O Wins!");
    results = "O Wins!"
    $('h3').text(`${results}`);
}
if (player1.length + player2.length === 9) {
    if (o != true && x != true) {
      console.log(" Draw!")
      results = "Draw!"
      $('h3').text(`${results}`);
// if inside an if is a nicer way of saying &&
    }
  }
});

// this is the if statement we use to make sure we have a answer or not.

const findWinner = function (player) {
  if ( (player.includes("1") && player.includes("2") && player.includes("3")) ||
       (player.includes("1") && player.includes("5") && player.includes("9")) ||
        (player.includes("1") && player.includes("4") && player.includes("7")) ||
       (player.includes("2") && player.includes("5") && player.includes("8")) ||
        (player.includes("3") && player.includes("6") && player.includes("9")) ||
        (player.includes("3") && player.includes("5") && player.includes("7")) ||
        (player.includes("4") && player.includes("5") && player.includes("6")) ||
        (player.includes("7") && player.includes("8") && player.includes("9"))
      ) {
        return true;
  } else {
    return false;
  }
  // else {
    // return false;
  // }
};
$("#reset").on("click", function (){
  window.location.reload();

})


});
