var proxy = require('redbird')({port: 90});

proxy.register("shop.cote.com/user", "http://localhost:5000");
proxy.register("monitoring.cote.com", "http://localhost:5001");
proxy.register("shop.cote.com", "http://localhost:5002");