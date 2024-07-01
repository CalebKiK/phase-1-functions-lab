function distanceFromHqInBlocks(pickupLocation) {
 const hqLocation = 42;
 let distanceInBlocks = (pickupLocation - hqLocation);
 
 if(pickupLocation < 42) {
     distanceInBlocks = (hqLocation - pickupLocation);
 } 

return distanceInBlocks;
}

function distanceFromHqInFeet(distanceInBlocks) {
    let blocks = distanceFromHqInBlocks(distanceInBlocks);
    
    let distanceInFeet = (blocks * 264);

    return (distanceInFeet);

}

function distanceTravelledInFeet(start, destination) {

 let distanceTravelledInFeet = (destination - start) *264;
 
 return distanceTravelledInFeet;
}

function calculateFarePrice(start, destination) {
    let distanceInFt = distanceTravelledInFeet (start, destination);

    if (distanceInFt <= 400){
       return "free";
    
    } else if (distanceInFt > 400 && distanceInFt <= 2000){
        let fare = (distanceInFt - 400) * 0.02;
        return fare;
        
    } else if ( distanceInFt > 2000 && distanceInFt <= 2500){
        return $25;

    } else{
        return "cannot travel that far";
    }
    
}

console.log(distanceFromHqInBlocks(50));

console.log(distanceFromHqInFeet(50));

console.log(distanceTravelledInFeet(34,38));

console.log(calculatesFarePrice(50));




