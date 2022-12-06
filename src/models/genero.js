
const generoSchema = new mongoose.Schema({
    _id:Number,
    nombreGenero: String,
    estadoGenero: String,
    album:[{
        type:Schema.Types.ObjectId,
        ref:'Album'
    }]

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Genero", generoSchema);