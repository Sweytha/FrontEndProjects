// Define an asynchronous function using async/await
const fetchDataAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "This is data from an async function with async/await.";
      resolve(data); // Resolve the Promise with the data
    }, 2000); // Simulate a 2-second delay
  });
};

// Define an async function to handle the data
const processAsyncData = async () => {
  try {
    const data = await fetchDataAsync();
    console.log("Data received:", data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

console.log("Start fetching data asynchronously with async/await...");
console.log("Data fetch request sent.");

// Call the processAsyncData function
processAsyncData();

// This will be executed immediately after the request is sent,
// without waiting for the data to be fetched.
