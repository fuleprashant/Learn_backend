const fs = require("fs");

// writing the new file as below
{
  /*
    fs.writeFile("input.txt", "Hello this is input data file", (err) => {
      if (err) throw err;
    });
    */
}

// read the file

// Q) readFile = asyncronus it means non-blocking.. it means if you print here anything than the console print firt than after print the other logs
{
  /*
    
    fs.readFile("input.txt", "utf-8", (err, data) => {
      console.log("++++");
      if (err) throw err;
    
      console.log(data);
      console.log("---");
    });
    */
}

// Q) readFuleSync = here in syscronus data print as we have

// const data = fs.readFileSync("input.txt", "utf-8");
// console.log(data);

// below is the code how can appent that data

// fs.appendFile("input.txt", "\n Hello backedn node and express", (err) => {
//   if (err) throw err;
// });

//------------------ upper methods are good to understand but not use industries for that call and methods are below
{
  /*
    const readStream = fs.createReadStream("input.txt", "utf-8");
    readStream.on("data", (chunk) => {
      console.log("++++++++++++", chunk);
    });
    
    readStream.on("end", () => {
      console.log("code is completed");
    })
    */
}

const writeStream = fs.createWriteStream("output.txt", "utf-8");
writeStream.write("Welcome to nodejs");
