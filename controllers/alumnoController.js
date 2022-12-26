const Alumno = require('../model/Alumno');

module.exports.mostrar = (req, res) => {
    Alumno.find({}, (err, alumnos)=>{
        if (err) {
            return res.status(500).json({message: 'Error Get alumnos'})
        }
        return res.render('index', {alumnos: alumnos})
    })
}
