let catA = 1;
let catB = 2;
let MouseC = 3;

function catAndMouse(x,y,z){
    if(z <= x && y > x){
        console.log('Cat A');
    }else if(z >= y && (x < y || x > y)){
        console.log('Cat B');
    }else{
        console.log('Mouse C');
    }
}

console.log(catAndMouse(catA,catB,MouseC));