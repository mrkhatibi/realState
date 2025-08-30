const { hash, compare } = require("bcryptjs")



async function hashPassword(password){
    return await hash(password , 12)
}

async function verifyPassword(password , hashedPassword){
   return await compare(password , hashedPassword) 
}



export {hashPassword , verifyPassword}
