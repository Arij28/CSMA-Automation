const { defineConfig } = require("cypress");


module.exports = defineConfig ({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  viewportHeight: 800,
  viewportWidth: 800,
  videoCompression: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      
  },
},
  env: {
    "CYPRESS_MAILSLURP_API_KEY": "47e5eb728e573bc66e4b480aadba436399019dc2cd38bfc30059c3d2fc39e03f"
    //MAILOSAUR_API_KEY : "mvSGfcIaT3VHtUvkMWSpTd15f2iKtI3c",
    //"CYPRESS_MAILSLURP_API_KEY" : "47e5eb728e573bc66e4b480aadba436399019dc2cd38bfc30059c3d2fc39e03f"
  }
});


