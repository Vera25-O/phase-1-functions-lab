// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => Math.abs(42 - blocks);
const distanceFromHqInFeet = (feet) => 264 * distanceFromHqInBlocks(feet);
const distanceTravelledInFeet = (start, destination) => Math.abs(start - destination)* 264;
const calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    } else if(distance > 400 && distance <= 2000){
        return (distance - 400)*0.02;
    } else if(distance > 2000 && distance < 2500){
        return 25;
    }else if(distance >= 2500){
        return 'cannot travel that far'
    }
}

    

