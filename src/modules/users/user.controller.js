import {UserSchema} from '../../../database/models/user.model.js'


export const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    const users = await UserSchema.findAll({
        where: {
        e_mail: email,
        password: password,
        },
    });

    if (users.length == 0) {
        res.json({status:"faild" , message :"wrong email or password"})
    } else {
        res.json({status:"success" , data:users[0]})
    }
};

export const addUser = async (req, res) => {
    const { email } = req.body
    const avail = await UserSchema.findAll({
      where: {
        e_mail:email
      },
    });

    if (avail.length == 0) {
        
        const user = await UserSchema.create({
            e_mail: email,
            password: req.body.password,
            userName: req.body.userName
        });
        res.json({message:"Success" , data:user})
    } else {
        res.json({status:"faild" , message:"Email is Already Exit" })
    }
} 

export const getAll = async (req, res) => {
    const users = await UserSchema.findAll();
    res.status(200).json({ status: "success", data: users });
}