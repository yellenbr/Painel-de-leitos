//Manter as importações no arquivo so server
// e não no que é puxado pelo html
const fs = require('fs');
const express = require("express")
const csv = require('csv-parser');
const json = require("./texto.json")
const app = express();
const port = 3000;
const cors = require("cors")

const filePath = "./painel_cc.csv"
const data = [];
app.use(cors())

app.get("/arquivoCSV", async(req,res) =>{
  fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    res.send(JSON.stringify(json));
  });
})

app.listen(port,() => {
  console.log("servidor iniciado")
  }
)



  