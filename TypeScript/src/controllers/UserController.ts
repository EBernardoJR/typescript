import { Request, Response} from 'express'
import EmailService from '../services/EmailService';

const users = [
    {name: "Emanoel", email: "emanoel@gmail.com"}
];


export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },
    async create(req: Request, res: Response){
        const emailService = new EmailService();
        const data = {
            to: { name: 'Emanoel Bernardo', email: 'tetste@gmail'}, 
            message: {   body: 'Ola rato',
            subject: 'Bem vindo'
            }
        }
        emailService.sendEmail(data)
        return res.send('ok')
    },
}