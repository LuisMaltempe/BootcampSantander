function getAdmins(map){
    let admins =[];
    for([key, value] of map){
        if(value ==='Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Felipe', 'User');
usuarios.set('Ana', 'Admin');
usuarios.set('Julia', 'Admin');

console.log(getAdmins(usuarios));