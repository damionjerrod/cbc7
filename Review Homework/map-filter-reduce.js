//this is my array of dogs...
var dogs = [
    {
        rank: 25,
        name: "Snoopy",
        status: "Bad"
    },
    {
        rank: 25,
        name: "Jinx",
        status: "Good"
    },
    {
        rank: 25,
        name: "Molly",
        status: "Good"
    },
    {
        rank: 25,
        name: "Sprite",
        status: "Bad"
    }
];

//this prints each dog's name in order using map
var doggieNames = dogs.map(function (doggie) {
    console.log(doggie.name);
  });

//this prints only "good" dogs filter
var goodDoggie = dogs.filter(function (doggie) {
    if(doggie.status === "Good"){
        console.log(doggie.name);
    }
});

//adds each dog's rank to get total team rank
var dogTeamRank = dogs.reduce(function (accumulator, doggie) {
    var totalRank = accumulator + doggie.rank;
    return totalRank;
  }, 0);
console.log(dogTeamRank);

module.exports = dogTeamRank;