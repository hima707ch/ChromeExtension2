const User = require('../Model/Model');

async function createUser(req,res,next){
    try{

        const {name,location,url,about,followers,connection,bioLine} = req.body;

        const user = await User.create({
            name,
            location,
            bioLine,
            about,
            followers,
            connection,
            url
        })
        console.log("created successfully", user);
        res.status(201).json({
            status : true
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : false
        })
    }
}

module.exports = createUser;