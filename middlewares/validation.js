
exports.userInput = (req , res , next) => {
    const query = req.body.cities;
    if(query.length === 0){
        throw new Error("not a valid input");
    }
    next();
}