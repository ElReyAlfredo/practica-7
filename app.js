// var Emitter = require('./emitter);
let Emitter = require("events");

let emtr = new Emitter();

emtr.on("greet", () => {
  console.log("This is ilon mosk");
});

let config = require("./config.js");

emtr.on(config.events.GREET, () => {
  console.log("Teslas co-founder and CEO");
});
emtr.emit("greet");

//Conclusiones: 
//Todo funciona de manera correcta simplemente con el events es una dependencia de