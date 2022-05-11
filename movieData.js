const currentMovies = [
  { title: '"The Northman"', director: 'Robert Eggers', rating: 82, synopsis:'Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy\'s mother. Two decades later, Amleth is now a Viking who raids Slavic villages. He soon meets a seeress who reminds him of his vow -- save his mother, kill his uncle, avenge his father.' },
  { title: '"The Unbearable Weight of Massive Talent"', director: 'Tom Gormican', rating: 67,  synopsis: 'Unfulfilled and facing financial ruin, actor Nick Cage accepts a $1 million offer to attend a wealthy fan\'s birthday party. Things take a wildly unexpected turn when a CIA operative recruits Cage for an unusual mission. Taking on the role of a lifetime, he soon finds himself channeling his most iconic and beloved characters to save himself and his loved ones.' },
  { title: '"This Much I Know to Be True"', director: 'Andrew Dominik', rating: 78, synopsis: 'Capturing Nick Cave and Warren Ellis\' creative relationship as they bring to life the songs from their last two studio albums, Ghosteen and Carnage.' },
  { title: '"Doctor Strange in the Multiverse of Madness"', director: 'Sam Raimi', rating: 61 },
];

function list () {
  return [...currentMovies] 
}; 

function find (title) {
  const movie = currentMovies.find(movie => movie.title === +title);
  return {...movie};
}

module.exports = { list: list, find: find };
