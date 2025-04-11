var CreateUser = /** @class */ (function () {
    function CreateUser(id, Username, FullName, email, password, status) {
        this.id = id;
        this.UserName = Username;
        this.FullName = FullName;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    CreateUser.prototype.checkUserCreate = function (UserName) {
        console.log("this User: ".concat(UserName, " was Created"));
    };
    return CreateUser;
}());
var User1 = new CreateUser(1, "@Taha", "Seyed Taha Khademi", "amncoder@gmail.com", 1388, true);
console.log(User1, User1.checkUserCreate("@Taha"));
