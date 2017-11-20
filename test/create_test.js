
const assert = require('assert')
const User = require('../src/user')

describe('Creating records',()=>{
    
    it('saves a user',()=>{
        
        const joe = new User({name:'Max'})
        joe.save()

        //assert(1+1 ===2 )
    })

})

