//infer types
// let userName="razal";
// userName=0
//defining type (explicit Type);
var userName = 'razal';
var phoneno = 8129933192;
var doYouWant = true;
var skils = ["JS", "TS", "CSS"];
var count = [1, 2, 3, 4, 4, 5];
var array = [];
var userDetailes = { name: "razal",
    age: 19
};
console.log(userDetailes);
var UserDetailes = {
    name: 'rarararar',
    age: 200,
    salery: 20000,
};
var adminDetailes = {
    name: "diedx",
    age: 66,
    salery: 1234,
};
var skiles = ["razal", "sjs", 10, 12, 13, 14, true];
function getUserDetails(userDetails) {
    return userDetailes === null || userDetailes === void 0 ? void 0 : userDetailes.age;
}
var newValue = getUserDetails(userDetailes);
newValue.tostring();
var currStatus = 'completed';
var response = "pending";
if (response === 'pending')
    currStatus = 'pending';
