const promiseTask = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const timestamp = Date.now();
      if (timestamp % 2 == 0) {
        resolve("Timestamp is even");
      } else {
        reject(new Error("Timestamp is odd"));
      }
    }, 1000);
  });
  
  promiseTask
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });