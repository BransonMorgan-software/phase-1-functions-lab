// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    if (someValue<42) {
        return (42-someValue);
    } else {
        return (someValue-42);
    }
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}
function distanceTravelledInFeet(a, b) {
    if (b>a) {
        return ((b-a)*264);
    } else {
        return ((a-b)*264);
    }
}