#pragma strict
//Christopher Lewis initial build May 06, 2016

//This script is controlled with Event Triggers that can be found on the animation clip timeline OR the sphere object

public var curtainAnimator:Animator;//The animator to play
public var canvasCurtain:GameObject;//the canvas that the curtain is located in. Active is toggled so this doesn't interfere with the reticle
public var cardboardMain:GameObject;//the gameobject to move
private var moveToStart:boolean = false;//a variable used to toggle whether the camera goes to zero or elsewhere


function Start () {

}

function Update () {

}
public function curtainIn(){
	canvasCurtain.SetActive(true);
	curtainAnimator.Play("FadeIn");
}
public function curtainOut(){
	curtainAnimator.Play("FadeOut");
}
public function moveCamera(){
	if (moveToStart == true){
		cardboardMain.transform.position.x = 0;
	}else{
		cardboardMain.transform.position.x = 3.39;
	}
	moveToStart = !moveToStart;
	curtainOut();
}
public function disableCanvas(){
	canvasCurtain.SetActive(false);
}