
app.use('/fotos', express.static('ruta donde esta la carpeta'));

app.post('/skater', async(req, res)=>{
    //recibir datos
    let {name, edad, altura, exp} = req.body;
    //recibo el archivo
    let foto = req.files.foto; //el nombre foto debe estar presente en la etiqueta input en el frontend <input name='foto'>
    //muevo el archivo hacia la carpeta
    foto.mv('/fotos')//carpeta
    //creo el registro con una referencia de img hacia donde esta contenida
    let skater = {
        nombre,
        edad,
        altura,
        exp,
        img:`/fotos/${foto.name}`
    }

    //guardo el skater en la bbdd
    await guardarSkater(skater);
    res.status(201).send('logrado');

})

//TO DO LIST -> manejo de errores, orden;

app.get('/skaters', async (req, res)=>{
    let arr = await obtenerSkaters();// ---> select * from skaters
    res.render('inicio', arr)//---> inicio.handlebars deberia recibir el array y mostrarlo con un helper #each

})