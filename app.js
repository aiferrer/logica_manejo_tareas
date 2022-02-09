require("colors");
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquireMenu, pausa} = require('./helpers/inquirer');
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
    console.log("Hola Mundo");  

    let opt = '';

    do {
        //opt = await inquireMenu();         
         
        const tareas = new Tareas();
        const tarea = new Tarea('Tarea Nueva');     
       // console.log(tarea);        
        tareas._listado[tarea.id] = tarea;

        console.log(tareas);     
                
        //console.log({opt});
        await pausa();  

    } while (opt !== '0' );

    
};

main();


