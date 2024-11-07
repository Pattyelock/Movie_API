// Import the required modules
const http = require("http");
const fs = require("fs");
const url = require("url");

// Create the server
const server = http.createServer((request, response) => {
  // Parse the URL to check if it contains 'documentation'
  const parsedUrl = url.parse(request.url, true);

  // Set the default path
  let filePath = "";

  if (parsedUrl.pathname.includes("documentation")) {
    // If the URL contains 'documentation', serve the documentation.html
    filePath = "./documentation.html";
  } else {
    // Otherwise, serve the index.html
    filePath = "./index.html";
  }

  // Read the HTML file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.end("Error loading the requested file.");
      return;
    }

    // Set the Content-Type to text/html
    response.setHeader("Content-Type", "text/html");

    // Send the file content as a response
    response.end(data);
  });
});

// Start the server and listen on port 8080
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
