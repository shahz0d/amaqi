const path = require('path');// bu 'path node ni ichidagi modul 
const getinfo = require('./module');
console.log(getinfo.getID(55));
console.log(`fayl nomi      ==>${path.basename(__filename)}`);
console.log(`directory nomi ==> ${path.dirname(__dirname)}`);
console.log(`formati        ==>${path.extname(__filename)}`);

