const displayContent = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/profile") {

        res.setHeader("Content-Type", "text/html");
        res.write("<p>this is a profile page</p>");
        return res.end();
    }
    else if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<p>chesseburgers</p>");
        return res.end();
    }
   
    else if (url === "/settings" && method === "POST") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<h1>Form was Submitted</form>`);
        return res.end();
    }
    else if (url === "/settings") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<h1>Settings page</h1><form action="/settings" method="POST"><input type="text"><button type="submit">send</button></form>`);
        return res.end();
    }


    res.setHeader("Content-Type", "text/html");
    res.write("<p>Page not Found</p>");
    return res.end();
}

module.exports = displayContent;
