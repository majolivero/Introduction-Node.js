//DIFERENCIA ENTRE IMPORT VS REQUIRE

//fs.readFile es una función asíncrona que se utiliza para leer el contenido de un archivo. Toma tres argumentos:
//El primer argumento es el nombre del archivo que deseo leer, en este caso, "example.txt".
//El segundo argumento es el tipo de codificación que se desea usar al leer el archivo. En este caso se usa "utf8", lo que significa que el archivo se leerá como una cadena de texto en formato UTF-8.
//El tercer argumento es una función callback que se ejecutará una vez que la operación de lectura se haya completado. 

//La función callback tienen dos argumentos: 
//err: Si hay un error al leer el archivo, este argumento contendrá el objeto de error.
//data: Si la lectura del archivo es exitosa, este argumento contendrá el contenido del archivo como una cadena de texto.

const fs = require("fs"); //Esta instrucción importa el módulo "fs" de Node.js que proporciona una API para interactuar con el sistema de archivos. Este es un módulo nativo de Node.js por lo que no se necesita instalar una dependencia adicional para usarlo.

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});

