// Define an asynchronous function using the async keyword
const getData = async () => {
  // Simulate an asynchronous operation with a Promise that resolves after 4 second
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // Return an object with a message property
  return { message: "Data fetched successfully" };
};

// Call the asynchronous function using await
const startTask = async () => {
  try {
    console.log("Fetching data...");
    // Wait for the data to be fetched using await
    const data = await getData();
    // Log the message property of the returned object to the console
    console.log(data.message);
  } catch (error) {
    // Log any errors to the console
    console.error("Error fetching data:", error);
  }
};

// Call the startTask function to start the program
startTask();