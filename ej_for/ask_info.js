"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Crear la interfaz para recibir datos del usuario
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('¿Cuál es tu nombre? ', function (userName) {
    console.log("\u00A1Hola, ".concat(userName, "!"));
    rl.close();
});
