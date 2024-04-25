import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

// protected routes token ki help say

export const requireSignIn = async (req,res,next) =>{
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        console.log(decode)
        req.user = decode;
        
        return decode;
        next();

    } catch (error){
    console.log(error);
    }
};

// admin access

export const isAdmin = async(req, res, next) =>{
    try{

        // subse pehele humko check karan hai wo adim hai ya nahi 
        const userDetails= await requireSignIn(req)
        console.log('pre user details', userDetails);
        const user = await userModel.findById(userDetails?._id)
        console.log('user details', user);
        if(user.role !== '1'){
            return res.status(401).send({
                success:false,
                message:'unauthorized access'
            });
        } else{
            next();
        }
    } catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            message:"error in admin middlware"
        })
    }
};
