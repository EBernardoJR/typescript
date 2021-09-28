interface IMailto {
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: string[]
}
//DTO - data transfer object

interface IMesssageDTO {
    to: IMailto,
    message: IMailMessage
}

interface IEmailService { //obriga a classe a ter esses metodos
    sendEmail( request: IMesssageDTO ): void
}

export default class EmailService implements IEmailService{
    // sendEmail(to: IMailto, message: IMailMessage){
    //     console.log(`${to.name} send: [${message.subject}] ${message.body}`)
    // }
    sendEmail({ to, message}: IMesssageDTO){
        console.log(`${to.name} send: [${message.subject}] ${message.body}`)
    }
}