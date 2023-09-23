function doGroceryShopping(): Promise<void> {
    console.log()
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Left car to mechanic in the morning at 9") 
        console.log("Do grocery shopping.");
        resolve();
      }, 2000); 
    });
  }
   
  
  
  function carMaintenance(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Car is fixed")
        console.log("Now you can take you car.");
        resolve();
      }, 1500); 
    });
  }
  
  function pickupLaundry(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Laundry pickup completed.");
        resolve();
      }, 1000); 
    });
  }
  
  function attendEvent(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Now you can attend the event.");
        resolve();
      }, 3000); 
    });
  }
  

  doGroceryShopping()
    .then(() => carMaintenance())
    .then(() => pickupLaundry())
    .then(() => attendEvent())
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  