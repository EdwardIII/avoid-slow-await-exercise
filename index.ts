// Quickstart:
// npm install
// tsc -watch index.ts
// node index.js

import axios from 'axios';

async function start(){
  // This will take around 6s to complete (each request takes around 2 seconds)
  // TODO: Make it take around 2s by making the requests concurrent (so it's only as slow as the slowest request)
  // using just built in JavaScript/Node functionality. Shouldn't need more than
  // an extra 2 lines or so.
  const results = [
    await axios.get('http://slowwly.robertomurray.co.uk/delay/2000/url/http://www.google.co.uk'),
    await axios.get('http://slowwly.robertomurray.co.uk/delay/2000/url/http://www.google.com'),
    await axios.get('http://slowwly.robertomurray.co.uk/delay/2000/url/http://www.google.com.mx'),
  ];

  return results;
}

start().then((results) => {
  const formatted = results.map((response) => `${response.config.url}: ${response.status}`);
  console.log(formatted.join("\n"));
});

// should output:
// http://slowwly.robertomurray.co.uk/delay/2000/url/http://www.google.co.uk: 200
// http://slowwly.robertomurray.co.uk/delay/2000/url/http://www.google.com: 200
// http://slowwly.robertomurray.co.uk/delay/2000/url/http://www.google.com.mx: 200
