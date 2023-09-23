function doGroceryShopping() {
    console.log();
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Left car to mechanic in the morning at 9");
            console.log("Do grocery shopping.");
            resolve();
        }, 2000);
    });
}
function carMaintenance() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Car is fixed");
            console.log("Now you can take you car.");
            resolve();
        }, 1500);
    });
}
function pickupLaundry() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Laundry pickup completed.");
            resolve();
        }, 1000);
    });
}
function attendEvent() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Now you can attend the event.");
            resolve();
        }, 3000);
    });
}
doGroceryShopping()
    .then(function () { return carMaintenance(); })
    .then(function () { return pickupLaundry(); })
    .then(function () { return attendEvent(); })
    .catch(function (error) {
    console.error("An error occurred:", error);
});
