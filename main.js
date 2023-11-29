// value types(primitive types)
// Number, String, Boolean, Null, Undifined, Symbol
let x = 2;
let y = x;
console.log(x, y);
x = 3;
console.log(x, y);


// Reference types (array, object)
let a = {
    value : 1
}
let b = a;
console.log(a, b)
a.value = 2;
console.log(a, b)





const users = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login(){
            console.log(`${noms} est connecté(e)`);
        },
        logout(){
            console.log(`${noms} est déconnecté(e)`);
        }
    }
}

const user1 = users('Awa', 'awa@cv.bien', 'Awa', "Maman", 'Ndiouna')
const user2 = users('Khady', 'khady@cv.bien', "Awa", 'Maman')

console.log(user1);
console.log(user1.email);
user1.login();

console.log(user2);
console.log(user2.email);
user2.logout()

function user(noms, email, ...amis) {
    this.noms = noms 
    this.email = email
    this.amis = amis
    this.login = function(){
        console.log(`${noms} est connecté(e)`);
    }
    this.logout = function(){
        console.log(`${noms} est déconnecté(e)`);
    }
}

class Admin extends user {
    supprimerUser(util){
    utilisateurs = utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email
    })
    }
}

const User1 = new user('Ma Awa', 'awa@cv.bien', 'Awa', "Maman", 'Ndiouna')
const User2 = new user('Ma Khady', 'khady@cv.bien', "Awa", 'Maman')
const admin = new Admin('Rama', 'rama@cv.bien', "Awa", 'Maman')

let utilisateurs = [User1, User2, admin]
console.log(User1);
console.log(user1.email);
User1.login();

console.log(User2);
console.log(User2.email);
User2.logout()

console.log(utilisateurs);
admin.supprimerUser(user2)
console.log(utilisateurs);