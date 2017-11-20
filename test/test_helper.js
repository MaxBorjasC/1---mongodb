const mongoose = require('mongoose')

//mongoose.connect('mongodb://localhost:27017/users_test')
mongoose.connect('mongodb://max:123@ds151461.mlab.com:51461/favorito')
mongoose.connection
            .once('open',() => console.log('Good to go'))
            .on('error',(error)=>{
                console.warn('warning',error)
            })

beforeEach(()=>{
   mongoose.connection.collections.users.drop() 
})