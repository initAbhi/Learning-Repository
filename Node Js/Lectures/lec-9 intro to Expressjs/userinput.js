const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
    res.write(' <form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" id="name" name="username" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write(
      ' <input type="radio" name="gender" id="male" name="gender" value="male">'
    );
    res.write('<label for="male">Male</label>');
    res.write(
      '<input type="radio" name="gender" id="female" name="gender" value="female">'
    );
    res.write('<label for="female">Female</label><br><br>');
    res.write(' <button type="submit">Submti</button>');
    res.write("</form>");
    return res.end();
  } else if (req.url == "/submit-details" && req.method == "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      // console.log(chunk);
      console.log(body);
    });
    
    req.on("end", () => {
      let data = Buffer.concat(body).toString();
      console.log(data);
      let newData = new URLSearchParams(data);
      console.log(newData);
      // let obj = {}
      // for(const [key,value] of newData){
      //   obj[key] = value
      // }
      let obj = Object.fromEntries(newData);
      console.log(obj);
      fs.writeFileSync("user.txt", JSON.stringify(obj));
    });
    res.write("<h1>Home page</h1>");
    res.end();
  }
};
module.exports = requestHandler;
