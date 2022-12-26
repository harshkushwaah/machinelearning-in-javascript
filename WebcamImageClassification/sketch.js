let mobilenetClassifier;
let video ;
let label = "loading..."

function draw(){
background(0);
image(video, 0, 0, width, height-40);
fill(255);
textSize(14);
text(label, 10, height-15);

};
function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        label = results[0].label;
        mobilenetClassifier.classify(gotResults);

    }
};
function modelLoaded() {
  console.log('Model Loaded!');
  mobilenetClassifier.classify(gotResults);
  
};
function setup(){
    createCanvas(640, 520);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenetClassifier = ml5.imageClassifier('MobileNet', video, modelLoaded);
};