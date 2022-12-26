let mobilenetClassifier;
let puffin ;
function imageReady(){
    image(puffin, 0, 0, width, height);
    mobilenetClassifier.classify(puffin, gotResults);
};
function setup(){
    createCanvas(640, 480);
    puffin = createImg('images/lizard.jfif', imageReady);
    puffin.hide();
    background(0);
    mobilenetClassifier = ml5.imageClassifier('MobileNet', modelLoaded);
};

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        // createDiv(`Class: ${results[0].label}`);
        createDiv(`Class: Kreesha from MUJ`);
        createDiv(`Confidence: ${nf(results[0].confidence , 0,4)*100}%`);
    }
};


function modelLoaded() {
  console.log('Model Loaded!');
}
