function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr;
}


function johnLennonFacts(facts) {
  var n = 0;

while (n < facts.length) {
    facts[n] += "!!!";
}

return facts;
}


function iLoveTheBeatles(number) {
  var loveBeatles = [];

  do {
    loveBeatles.push("I love the Beatles!")
  } while (number < 15);

  return loveBeatles;
}
