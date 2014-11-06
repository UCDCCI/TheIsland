#pragma strict

function Start () {

}
var throwSound : AudioClip;
var coconutPrefab : Rigidbody;
var throwSpeed : float = 30.0;
static var canThrow : boolean = false;

function Update () {

if (Input.GetButtonDown("Fire1") && canThrow == true){
audio.PlayOneShot(throwSound);
var newCoconut : Rigidbody = Instantiate(coconutPrefab, transform.position, transform.rotation);
	newCoconut.name = "coconut";
	newCoconut.velocity = transform.forward * throwSpeed;
	Physics.IgnoreCollision (transform.root.collider,newCoconut.collider, true);
}
}
@script RequireComponent (AudioSource)