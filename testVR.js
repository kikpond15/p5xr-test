function preload(){
    createVRCanvas();
}

function setup() {
    
}

function caluculate(){

}


function draw() {
    setVRBackgroundColor(255, 255, 255); //RGB3つ設定しないとダメ
    setViewerPosition(0, 0, 400);

    fill(255,0,0);
    rect(0,0,-100, 200, 200);
}
