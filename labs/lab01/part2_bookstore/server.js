let http = require("http");
let fs = require("fs");
let path = require("path");

let PORT = 3000;

let server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "pages", req.url === "/" ? "index.html" : `${req.url}.html`);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, "pages", "404.html"), (error, notFoundContent) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end(notFoundContent || "404 - Page Not Found");
            });
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
