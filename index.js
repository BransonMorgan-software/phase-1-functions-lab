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