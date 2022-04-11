const mongoose = require('mongoose')

function start() {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
      })
      const db = mongoose.connection
      db.on('error', (error) => console.log(error))
      db.once('open', () => console.log('conectado ao mongo'))      
};

export default start;
    
