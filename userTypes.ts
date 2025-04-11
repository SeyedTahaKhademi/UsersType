type Users = {
    id: number
    UserName : string
    FullName : string
    email : string
    password : number
    status : boolean
}

class CreateUser implements Users {
    id: number
    UserName: string
    FullName: string
    email: string
    password: number
    status: boolean
    constructor(id: number , Username: string , FullName: string , email: string , password: number , status: boolean) {
        this.id = id
        this.UserName = Username
        this.FullName = FullName
        this.email = email
        this.password = password
        this.status = status
    }
    checkUserCreate(UserName) {
        console.log(`this User: ${UserName} was Created`);
        
    }
}
const User1 = new CreateUser(1 , "@Taha" , "Seyed Taha Khademi" , "amncoder@gmail.com" , 1388 , true)
console.log(User1 , User1.checkUserCreate("@Taha"));
