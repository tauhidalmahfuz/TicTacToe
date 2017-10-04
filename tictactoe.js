var turn = false;
function play(event){
  console.log(event);
  event.target.innerHTML = turn? "O":"X";
  turn  =!turn;
}
