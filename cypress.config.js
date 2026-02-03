const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Tempo de espera padrão para comandos (o padrão é 4000ms)
    // Vamos aumentar para 6000ms (6 segundos) para dar fôlego em redes lentas
    defaultCommandTimeout: 6000,

    // Tempo de espera para requisições de rede (padrão é 30000ms)
    pageLoadTimeout: 60000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
