import * as request from 'request';
export class SalesForceEmail {

    /**
     * Sends an email through Salesforce
     * @param emailAddress The email address to deliver to
     * @param subject The subject of the email
     * @param body The plain-text email body
     */
    static send(connection: any, emailAddress: string, subject: string, body: string) {
        return new Promise((resolve, reject) => {
            request.post(
                `https://na54.salesforce.com/services/data/v39.0/actions/standard/emailSimple`,
                {
                    json: {
                        'inputs': [
                            {
                                'emailBody': body,
                                'emailAddresses': emailAddress,
                                'emailSubject': subject,
                                'senderAddress': 'noreply@devonite.com',
                                'senderType': 'OrgWideEmailAddress'
                            }
                        ]
                    },
                    headers: {
                        'Authorization': `Bearer ${connection.accessToken}`
                    }
                },
                (error: any, response: any, body: any) => {
                    if (error) {
                        console.error(error);
                        return reject(error);
                    }
                    if (body) {
                        const result = body[0];
                        if (body.errors) {
                            console.error(body.errors);
                            return reject(body.errors);
                        }
                    }
                    console.log(body);
                    resolve(body);
                });
        });
    }

}
