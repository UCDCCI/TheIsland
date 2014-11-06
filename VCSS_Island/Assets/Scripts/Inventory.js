#pragma strict

 static var charge : int = 0;
var collectSound : AudioClip;
var meterCharge : Texture2D[];
var meter : Renderer;
//HUD
var hudCharge : Texture2D[];
var chargeHudGUI : GUITexture;
private var haveMatches : boolean= false;
var matchGUIprefab : GUITexture;
private var matchGUI : GUITexture;
var textHints : GUIText;
private var fireIsLit :boolean=false;
function Start () {
	charge = 0;
}

function Update () {

}

function CellPickup(){
	HUDon();
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	chargeHudGUI.texture = hudCharge[charge];
	meter.material.mainTexture = meterCharge[charge];
}

function HUDon(){

if(!chargeHudGUI.enabled){

	chargeHudGUI.enabled = true;
	}
}

function MatchPickup(){
	haveMatches = true;
	AudioSource.PlayClipAtPoint(collectSound,transform.position);
	var matchHUD : GUITexture = Instantiate(matchGUIprefab, Vector3(0.15,0.1,0), transform.rotation);
	matchGUI = matchHUD;

}

function OnControllerColliderHit(col:ControllerColliderHit){
if(col.gameObject.name =="campfire"){
if(haveMatches){
	LightFire(col.gameObject);
	
	}else if(!haveMatches&&!fireIsLit) {
	textHints.SendMessage("ShowHint", "I could use this campfire to signal for help.. if only i could light it ..");
	
	}
}

}
function LightFire(campfire : GameObject){
campfire.GetComponentInChildren(ParticleSystem).Play();
//campfire.audio.Play();
Destroy (matchGUI);
haveMatches=false;
fireIsLit = true;

}
//Generator


