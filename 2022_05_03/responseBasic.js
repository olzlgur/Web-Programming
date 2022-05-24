const express = require('express');

const app = express();

app.get('*', (request, response) => {
  response.status(404);
  response.set('methodA', 'ABCDE');
  response.set({
    'methodB1': 'FGHIJ',
    'methodB2': 'KLMNO'
  });
  response.send('Hello, Again!!');
});

app.listen(52273, ()=> {
  console.log('Server running at http://127.0.0.1:52273');
});