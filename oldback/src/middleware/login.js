function checkLogin(req,res,next){
    if(req.session.twitchData) next()
    console.log(req.session)
    if(!req.session.hasOwnProperty('twitchData')) res.status(401).json({error: "Unauthorized"})
}

module.exports = { checkLogin }