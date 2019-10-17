var randomPic = faker.image.avatar();
var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();
var randomJob = faker.name.title();

document.getElementById("image").src = randomPic;
document.getElementById("name").innerHTML = randomName;
document.getElementById("title").innerHTML = randomJob;
document.getElementById("email").innerHTML = randomEmail;