const express = require('express')
const _ = require('lodash');
const request = require('request-promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/translate', (req,res) => {
    
    const { sourceLang , targetLang, text } = req.body;
    console.log(req.body);
    const url = "Enter your gooogle translate API url here";

    const data = {
        'sl': sourceLang,
        'tl': targetLang,
        'q': text,
    };

    request({
        method: 'POST',
        uri: url,
        encoding: 'UTF-8',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'User-Agent': 'AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1',
        },
        form: data,
        json: true,
    })
    .then((data) => {
      return res.json(data.sentences)
    })

})
app.listen(port, () => {
  console.log(`Translation app listening on port ${port}`)
})
