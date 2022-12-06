const Genero = require("../models/genero");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
    
    try {
    const genero = await Genero.find().populate({
    path: "album",
    select:{genero:0} //populate de genero. remplazo del path en el documento cuando esta en la coleccion, o sea select and put  
    });

    res.status(200).json(genero);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    
    try {
    const _id = req.params._id;
    const genero = await Genero.findById(_id).populate({
    path: "album",
    select:{genero:0} 
    }); 
       
      res.status(200).json(genero);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.add = async (req, res) => {
    try {
  
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const nGenero = new Genero(req.body)
      console.log(req.file);

     
      await nGenero.save();
      console.log(nGenero);
      res.json({ msj: "Usuario registrado exitosamente", nGenero })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const _id = req.params._id;
      const nGenero = new Genero(req.body,req.file)
      console.log(req.file);

      
      const cambioGenero = await genero.findByIdAndUpdate(_id, nGenero);
      res.json({ msj: "el genero fue actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }