const add = require("./add");
const { buffer } = require("stream/consumers");

const handleReq = (req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
           <h1>Welcome</h1>
      <p>This is your link to the calculator - <a href="/calculator">Calculator</a></p>
          `);
    return res.end();
  } else if (req.url == "/calculator") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
              <form action="calculate-result" method="POST">
          <input type="number" name="first" placeholder="Enter first number">
          <input type="number" name="second"  placeholder="Enter second number">
          <button type="submit">Calculate answer</button>
      </form>
          `);
    return res.end();
  } else if (req.url == "/calculate-result") {
    let data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      let newData = Buffer.concat(data).toString();

      let params = new URLSearchParams(newData);
      let realData = Object.fromEntries(params);
      let result = add(parseInt(realData.first), parseInt(realData.second));
      res.setHeader("Content-Type", "text/html");
      res.write(`<h1>Result is - ${result}</h1>`);
      return res.end();
    });
  }
};

module.exports = handleReq;
