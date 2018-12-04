register = {}

register.register = (req,res)=>{
    let product = {
        "name": req.body.name,
        "price": req.body.price,
        "stock": req.body.stock
    }

    // código para persistir
}

module.exports = register