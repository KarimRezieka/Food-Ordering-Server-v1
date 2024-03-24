import { Request, Response } from "express";
import UserSchema from "../model/userModel";
exports.createCurrentUser = async (req: Request, res: Response) => {
  try {
    const {auth0Id} = req.body;
    const existingUser = await UserSchema.findOne({auth0Id})
    if(existingUser){
        return res.status(200).send();
    }else{
        const newUser =new UserSchema(req.body)
        await newUser.save();
        res.status(201).json(newUser.toObject());
    }
    const data = await UserSchema.create(req.body);
  } catch (err) {
    res.status(500).json({message:`Error Creating user ${err}`})
  }
};
