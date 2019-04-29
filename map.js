let creaturesArray = ["Basilisk", "Acromantula", "Dementor"];

let newArray = creaturesArray.map(function(creature){
    return creature + "'s are my favorite."
});

console.log(newArray);

let housePoints = [312, 426, 352, 472];

function addPoint(house) {
    return house + 1;
}

let awardPoints = housePoints.map(addPoint);

console.log(awardPoints);

function squarePoints(house) {
    return house * house;
}

let finalPoints = housePoints.map(addPoint).map(squarePoints);

console.log(finalPoints);
