const { defineConfig } = require("cypress");

module.exports = defineConfig({

    viewportWidth: 1920,
    viewportHeight: 1080,

   e2e: {
    // implement node event listeners here
      setupNodeEvents(on, config) {
  // plugins para imprimir en la consola del terminal 
        on('task',{
           log(message){
            console.log('Mensaje del console log del task ' + message)
            return null
           } 
        })
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    baseUrl: 'https://demoqa.com',
    video:false
  },
});