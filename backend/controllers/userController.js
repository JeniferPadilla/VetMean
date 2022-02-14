import user from "../model/user.js";

const registerUser = async(req, res) =>{

    if (!req.body.name || !req.body.phone || !req.body.email || !req.body.direction || !req.body.password )

    return res.status(400).send({message: "Imcomplete data"});

    let schemaUser = new user({

        name: req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        direction:req.body.direction,
        password:req.body.password,
        dbStatus:true,
    });
    let result = await schemaUser.save();

    if(!result) return res.status(500).send({message: "Error to register user"});
};
export default{registerUser};