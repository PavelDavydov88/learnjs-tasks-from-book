let user = {};
user.name = "John";
alert(user.name);
user.surname = "Smith";
user.name = "Pete";
alert(user.name);
delete user.name;
alert(user.name);