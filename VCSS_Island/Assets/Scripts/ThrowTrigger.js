#pragma strict

function Start () {

}

function Update () {

}
var textHints : GUIText;
var crosshair : GUITexture;
function OnTriggerEnter (col : Collider) {
	if (col.gameObject.tag == "Player"){
		CoconutThrower.canThrow=true;
		crosshair.enabled=true;
	if (!CoconutWin.haveWon){
		textHints.SendMessage("ShowHint", "\n\n\n\n\n There's a power cell attached to this game, \n maybe i'll win it if i can knock down all the targets...");
	
	}
				
	}
	
}

function OnTriggerExit(col : Collider){
	if (col.gameObject.tag == "Player"){
		CoconutThrower.canThrow=false;
		crosshair.enabled=false;
	}

}