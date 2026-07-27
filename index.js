const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 

app.get('/:id', (request, response) => {
  response.send(`user ${request.params.id}`);
});
