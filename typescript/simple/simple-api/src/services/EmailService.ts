
interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface ISendMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IEmailService {
    sendEmail(request: ISendMessageDTO): void;
}


class EmailService implements IEmailService {

    async sendEmail({to, message}: ISendMessageDTO) {
        console.log(`Email sended to ${to.name}: ${message.subject}`);
    }

}

function IEmailService() {
    const IEmailService = EmailService;
    return IEmailService;
};


export default IEmailService();

