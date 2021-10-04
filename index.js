const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Coding practice first

const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);
