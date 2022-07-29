import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {
        name:  "Allyson",
        email: "emailSantana@hmail.com"
    },
    {
        name:  "Luiz",
        email: "emailCardoso@hmail.com"
    }
]

class userControllers {

    constructor() {
        
    }

    async index(req: Request, res: Response) {
        return res.status(200).json(users)
    }

  
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        
        emailService.sendEmail({
            to: { 
                name: "Allyson Luiz", 
                email: "allysonluiz@gmail.com" 
            },
            message: { 
                subject: "Teste", 
                body: "Teste de envio de E-mail" 
            }
        });

        return res.send();
    
    }

}

function IuserControllers() {
    const IuserControllers = new userControllers();
    return IuserControllers;
} 

export default IuserControllers();


