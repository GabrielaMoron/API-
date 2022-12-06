const mongoose = require('mongoose');
const conexionBD=async()=>{
     try{
        const DB=await mongoose.connect('mongodb+srv://solq44:sol44q@cluster0.hx2oziu.mongodb.net/?retryWrites=true&w=majority');
        //mongodb+srv://solq44:sol44q@cluster0.hx2oziu.mongodb.net/disquera
        console.log("Conexión real ",DB.connection.name);
    }
    catch( error){
        console.log(error);
    }
}
//
module.exports=conexionBD;