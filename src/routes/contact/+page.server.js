import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const name = formData.get("name");
        const subject = formData.get("subject");
        const body = formData.get("body");

        let html = `<h2>Hello!</h2><pre>${body}</pre>`;

        const message = {
            from: GOOGLE_EMAIL,
            to: name,
            bcc: "gatwell702.gmail.com",
            subject: subject,
            text: body,
            html: html
        };

        const sendEmail = (message) => {
            return new Promise((resolve, reject) => {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        };

        await sendEmail(message);

        return {
            success: "Email is sent!"
        }
    }
}