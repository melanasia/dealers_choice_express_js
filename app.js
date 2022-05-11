const express = require('express');
const morgan = require('morgan');
const movieData = require('./movieData');
const app = express();
const path = require('path');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/movies/:title', (req, res) => {
    const movies = movieData.find(req.params.title);
    res.send(movies);
});

app.get('/', (req, res) => {

 const movies = movieData.list();

 const html = `<!DOCTYPE html>
   <html>
     <head>
       <title>Current Movies</title>
       <link rel='stylesheet' href='/style.css' />
     </head>
     <body>
       <header>Now Playing</header>
       <ul>
         ${movies.map((movie) =>`
         <li>${movie.title} directed by ${movie.director} with a Metascore of ${movie.rating}</li>
         <div>
           <a href ='/movies/${movie.title}' class='synopsis'>${movie.synopsis}</a>
         </div>`
         ).join(' ')}
       </ul>
     </body>
   </html>`;

 res.send(html);
});

const PORT = process.env.PORT || 1337;

app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}!`)
});

// clicking results in empty object
// did not get to error handling