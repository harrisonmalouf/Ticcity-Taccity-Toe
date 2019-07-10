console.log("run");

$(document).ready(function (){
// I'll just get the click function to push the answers into player 1s array for now.


// this will be the empty array which'll push all of our choices into from a player1
const answer1 = []

// we'll push player2s' answer in here
const answer2 = []

let click = 0

$(".fieldTokens").on("click", function() {

    // if ( click % 2 == 0) {
    //   answer1.push(currentId);
    //   console.log('answer1', answer1);
    //   return true
    // } else {
    //   answer2.push(currentId);
    //   console.log("answer2", answer2);
    //   return false
    // };
    //   $(this).toggle('clicks', click+1);
    if ( click % 2 == 0) {
    answer1.push($(this).attr("id"));
    $(this).text('X');
    console.log('answer1', answer1);
    } else {
      answer1.push($(this).attr("id"));
      $(this).text('O');
      console.log("answer2", answer2);
      findWinner(answer2);
      }
      click += 1;

     findWinner(answer1);
     findWinner(answer2);
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
};



});
