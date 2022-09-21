const auth = require('../services/auth.service');
const createError = require('http-errors');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

class authController {
    static create = async(req, res) =>{
        try{
            const prisma = new PrismaClient()
            const {body} = req
            body.password = bcrypt.hashSync(body.password, 8)
            console.log(body)
        const users = await prisma.user.create({
            data:{
                ...body
            }        
        })
        res.json({
            ok: true,
            user: users
        })
        }catch(error){
            res.json({
                message: error.message
            })
        }
    }
    static login = async (req, res, next) => {

         try {
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static all = async (req, res, next) => {
        try {

            const users = await auth.all();
            res.status(200).json({
                status: true,
                message: 'All users',
                data: users
            })

        }
        catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}
module.exports = authController;

