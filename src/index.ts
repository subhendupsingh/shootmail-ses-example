import { Shootmail, type ShootMailConfig } from "shootmail";

const config: ShootMailConfig = {
    shootmailApiKey: "",
    providers: [
        {
            "provider": "zoho",
            "apiKey": ""
        },
        {
            "provider": "resend",
            "apiKey": ""
        },
        {
            "provider": "sendgrid",
            "apiKey": ""
        },
        {
            "provider": "postmark",
            "apiKey": ""
        },
        {
            provider: "aws-ses",
            apiKey: {
                accessKeyId: "",
                secretAccessKey: "",
                region: ""
            }
        }
    ],
}

const shootmail = new Shootmail(config);

const sendMail = async () => {
    const response = await shootmail.shoot({
        preHeader: "Lifetime Access to Notion-like email editor & templates -  Shootmail",
        templateId: "gktffznidphwrqx",
        from: {
            name: "Shootmail",
            email: "",  //email registered on email service provider like SES
        },
        provider: "aws-ses",
        to: [{ email: "" }],
        subject: "Lifetime Access to Shootmail",
        data: {
            button: "Explore Now"
        },
    });

    console.log(response);
}

sendMail();


