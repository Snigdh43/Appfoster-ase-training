const fs = require('fs');
const http = require('http');
const path = require('path');

const bioData = [
  {
    id: 5859483,
    name: "Rajan Kaniyar DO",
    email: "kaniyar_rajan_do@rosenbaum.example",
    gender: "male",
    status: "active",
  },
  {
    id: 5859479,
    name: "Rageshwari Mehra CPA",
    email: "mehra_cpa_rageshwari@kassulke-kunde.example",
    gender: "female",
    status: "inactive",
  },
];

const obj = JSON.stringify(bioData);

// Use asynchronous readFile instead of readFileSync
fs.readFile("index.html", "utf-8", (err, homefile) => {
  if (err) {
    console.error(err);
    return;
  }

  // Create a server
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      // Serve the HTML file
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(homefile);
      res.end();
    } else if (req.url === "../Task_12/main.js") {
      // Serve the JavaScript file
      const jsFilePath = path.join(__dirname, "../main.js");
      fs.readFile(jsFilePath, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "application/javascript" });
          res.write(data);
        }
        res.end();
      });
    } else {
      // Handle 404 for unknown routes
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Not Found");
      res.end();
    }
  });

  // Start the server
  const PORT = 8000;
  const HOST = "127.0.0.1";
  server.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
  });
});
