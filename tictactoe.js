/*{
  document.getElementById("gip").style.visibility = "hidden";

}


**/

var turn =false;
var iDpos = [];
var j=0;
var OWinCounter=0;
var XWinCounter=0;
var OLoseCounter=0;
var XLoseCounter=0;

function play(event,clicked_id){
  console.log(event);
  event.target.innerHTML= turn? "O":"X";
  turn=!turn;

  iDpos[clicked_id]=turn;

  console.log("id: "+clicked_id);
  for (var i = 0; i < 9; i++) {
    console.log("ID Position: "+i+iDpos[i]);
  }

  // x wins

    if( (iDpos[0]&&iDpos[1]&&iDpos[2]== true)  )
    {
      XWinCounter++;
      OLoseCounter++;
      console.log("x wins");
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[3]&&iDpos[4]&&iDpos[5]== true)  )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[6]&&iDpos[7]&&iDpos[8]== true) )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[0]&&iDpos[3]&&iDpos[6]== true)  )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[1]&&iDpos[4]&&iDpos[7]== true) )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[2]&&iDpos[5]&&iDpos[8]== true) )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[0]&&iDpos[4]&&iDpos[8]== true) )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }
    if( (iDpos[2]&&iDpos[4]&&iDpos[6]== true) )
    {
      XWinCounter++;
      OLoseCounter++;
      document.getElementById('xwin').innerHTML = XWinCounter;
      document.getElementById('olose').innerHTML = OLoseCounter;
    }

    //Owins

    if( iDpos[0]==false && iDpos[1]== false && iDpos[2]== false  )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[3]==false && iDpos[4]==false && iDpos[5]== false  )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[6]==false && iDpos[7]==false && iDpos[8]== false )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[0]==false && iDpos[3]==false && iDpos[6]== false )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[1]==false &&iDpos[4]==false &&iDpos[7]== false )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[2]==false && iDpos[5]==false && iDpos[8]== false )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[0]==false && iDpos[4]==false && iDpos[8]== false )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
    if( iDpos[2]==false && iDpos[4]==false && iDpos[6]== false )
    {
      OWinCounter++;
      XLoseCounter++;
      document.getElementById('xlose').innerHTML = XLoseCounter;
      document.getElementById('owin').innerHTML = OWinCounter;
    }
}
function restartGame()
{
   window.location.reload();
   //document.getElementById("tableBoard").reset();
}
