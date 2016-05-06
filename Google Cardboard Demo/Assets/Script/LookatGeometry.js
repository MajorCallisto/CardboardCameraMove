#pragma strict

private var carrying:boolean = false;
function Start () {
	var textObj:UnityEngine.UI.Text = GameObject.Find("Hide Button Text").GetComponent.<UnityEngine.UI.Text>();
	textObj.text = "Hi there";
	Debug.Log (textObj);
}

function Update () {

}
public function SetGazedAt(gazedAt:boolean) {
	GetComponent.<Renderer>().material.color = gazedAt ? Color.green : Color.white;

	if (gazedAt == false){
		carrying = false;
		dropIt();
	}
}
public function pickup(){
	if (carrying == false){
		GetComponent.<Rigidbody>().useGravity = false;
		transform.parent = GameObject.Find("Cardboard Reticle").transform;
		carrying = true;
	}else{
		dropIt();
	}
}
public function dropIt(){
	GetComponent.<Rigidbody>().useGravity = true;
	transform.parent = GameObject.Find("Group Interactive").transform;
	carrying = false;
}