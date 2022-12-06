
const {Router}=require("express");

//rutas album
const rutasAlbum=Router();
const ctrAlb=require("../controllers/albumC")

const multer=require("multer");

const carga=multer({storage:rutaStorage});



//album

rutasAlbum.get('/', ctrAlb.obtener);

rutasAlbum.get('/:id', ctrAlb.obtenerid);

rutasAlbum.post('/', ctrAlb.add);
  
rutasAlbum.put('/:id', ctrAlb.edit);




module.exports=rutasAlbum;
