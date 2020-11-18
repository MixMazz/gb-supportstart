
0
- Created a folder called 'express'
- Created a package.json file
- Created a server.js file

1
- added this to package.json
```
{
    "name": "grimbot-support",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "start": "node server.js"
    },
    "dependencies": {
        "express": "4.17.1"
    }
}
```

2
- added this to server.js 
```
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname: It will resolve to your project folder.
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug(`Server listening on port ${port}`)
```