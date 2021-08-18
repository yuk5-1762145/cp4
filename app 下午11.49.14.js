/*
 * Name: Rita Kuo
 * Date: November 18, 2020
 * Section: CSE 154 AJ
 * This is the JS to implement CP4. It creates our own APIs. My APIs include names for three movies
 * and summaries for three movies. The index.js files can fetch url from this file.
 */
'use strict';
const express = require('express');
const app = express();
let summary = {
  'Interstellar': 'A science fiction movie that is co-written, directed and produced by\
                    Christopher Nolan.This movie is about a group of astronaut travel through\
                    the warmwhole to search new home for human.',
  'Peninsula': 'A Korean action horror film directed by  Yeon Sang-ho. It is a sequal to Train\
                to Busan. This film is mainly about a soldier with his squad are going back to the\
                wastelands of the Korean peninsula to get a truck full of money. However, the\
                Korean peninsula are now inhabited by zombies and rogue militia.',
  'Tenet': 'A science fiction movie that is written and directed by Christopher Nolan and\
            produced it with Emma Thomas. It is also a co-production between the US and the UK.\
            This film basically talks about how to manipulate time to precent WWIII.'
};

/*
 * Gets the name of three movies.
 * The respond will return plain text.
 */
app.get("/name/year", function(req, res) {
  res.type('text');
  res.send('1.Interstellar(2014), 2.Peninsula(2020), 3.Tenet(2020)');
});

/*
 * Gets the summary of three movies.
 * If the requested :movie is not equal to the listed movie names, it will return an error message.
 * The respond will be in Json format.
 */
app.get("/name/:movie", function(req, res) {
  const statusNum = 400;
  let movieSum = req.params['movie'];
  if (movieSum === "Interstellar" || movieSum === "Peninsula" || movieSum === "Tenet") {
    res.json(summary);
  } else {
    res.status(statusNum).json({'error': 'No summary in server'});
  }
});

const portNum = 8000;
app.use(express.static('public'));
const PORT = process.env.PORT || portNum;
app.listen(PORT);
