// Define an asynchronous function using an arrow function
const fetchDataWithCallback = (callback) => {
  setTimeout(() => {
    const data = "This is data from an async function with an arrow function.";
    callback(data);
  }, 2000); // Simulate a 2-second delay
};

// Define a callback function to handle the data
const processCallbackData = (data) => {
  console.log("Data received:", data);
};

// Call the fetchDataAsync function and pass the processData function as a callback
console.log("Start fetching data asynchronously...");
fetchDataWithCallback(processCallbackData);
console.log("Data fetch request sent.");

// This will be executed immediately after the request is sent,
// without waiting for the data to be fetched.


// Define an asynchronous function using Promises
const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "This is data from an async function with Promises.";
        resolve(data); // Resolve the Promise with the data
      }, 2000); // Simulate a 2-second delay
    });
  };
  
  // Define a function to handle the data when the Promise resolves
  const processPromiseData = (data) => {
    console.log("Data received:", data);
  };
  
  console.log("Start fetching data asynchronously with Promises...");
  console.log("Data fetch request sent.");
  
  // Call the fetchDataWithPromise function and use .then() to handle the data
  fetchDataWithPromise()
    .then(processPromiseData)
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  
  // This will be executed immediately after the request is sent,
  // without waiting for the data to be fetched.
  