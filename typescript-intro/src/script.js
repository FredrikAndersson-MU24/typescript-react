var animal = {
    name: "fredrik",
    type: "fish",
};
var person = {
    name: "Fredrik",
    age: 38,
};
var user = {
    id: crypto.randomUUID(),
    username: "fredrik",
    accessLevel: 2,
    creation_date: new Date(),
    last_login: new Date(),
    posts: ["apple", "kiwi", "pear"],
    data: {},
};
console.log(user);
