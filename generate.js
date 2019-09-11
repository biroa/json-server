//https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
// https://github.com/marak/Faker.js/
// https://www.npmjs.com/package/json-server
// http://marak.github.io/faker.js/
var faker = require('faker');
var youTubeUrls = [
    'https://www.youtube.com/watch?v=5DayCGCyfMk',
    'https://www.youtube.com/watch?v=ZQHp5ndfxxI',
    'https://www.youtube.com/watch?v=9VHkvI5DoK4',
    'https://www.youtube.com/watch?v=uW8AZCPp3AE',
    'https://www.youtube.com/watch?v=UEQvj3DcDuI',
    'https://www.youtube.com/watch?v=p2Y0Sg1Hfgg',
    'https://www.youtube.com/watch?v=kW_lf9xntVc',
    'https://www.youtube.com/watch?v=FP2ThA4nCNI',
    'https://www.youtube.com/watch?v=MY5ye617VEs',
    'https://www.youtube.com/watch?v=p5TArDdv6Dw',
];

function generateEmployees () {
    var profiles = []
    for (var id = 0; id < 50; id++) {
        var name = faker.name.findName();
        var email = faker.internet.email();
        var image = faker.image.sports();
        //faker.random.number({min:0, max:9})
        var video = youTubeUrls[id%10];

        profiles.push({
            "id": id,
            "name": name,
            "email": email,
            "image":image,
            "video":video
        })
    }
    return { "profiles": profiles }
}
module.exports = generateEmployees;

