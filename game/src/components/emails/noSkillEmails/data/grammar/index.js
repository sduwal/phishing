/* eslint-disable indent */
import { Text, Link, Box } from "@chakra-ui/react";

import createSpellingErrors from "@components/emails/shared/createSpellingErrors";
import createGrammaticalErrors from "@components/emails/shared/createGrammaticalErrors";

import _ from "lodash";

function createEmails(spellingTrained) {
    let messages = [
        {
            name: "Andrew Edwards",
            subject: "Payment Notification",
            to: "bo@rueri.eg",
            from: "nobe@ve.mu",
            start: "Your payment to Peter Lyons has been received. Click the link to check your payment details.",
            end: "Please allow up to 20 minutes for this transaction to show up on your account."
        },
        {
            name: "Lulu Maldonado",
            subject: "Important: Your account has been disabled",
            to: "rumopa@ro.si",
            from: "mokak@mos.at",
            start: "We noticed some unusual activity on your account. We have disabled your account to protect your information. Learn more:",
            end: "If you have any questions, please contact us at through the paypal website."
        },
        {
            name: "Edna Blair",
            subject: "Your password will expire in 2 days",
            to: "duke@mes.ao",
            from: "per@be.cm",
            start: "Your password will expire in 2 days. Please change your password as soon as possible. You can click the link below to change your password.",
            end: "NOTE: PayPal will not be responsible for any login malfunctions after this warning."
        },
        {
            name: "Kyle Norris",
            subject: "Your account has been temporarily disabled",
            to: "ohu@wokrupe.my",
            from: "utofefru@eftumvik.pf",
            start: "Your PayPal account has been temprorarily restricted. We have found suspicious activity on your credit cards linked to your PayPal account. Learn more:",
            end: "After you complete the requrested task, we will review the account and contact you about its status within 5 working days."
        },
        {
            subject: "Limited Account",
            name: "Beatrice Freeman",
            from: "ilofafad@ze.bz",
            to: "wugawvep@durutuw.ck",
            start: "Recently, we have limited your account access due to suspected and illegal uses. Please check your account as soon as possible by clicking the button below.",
            end: ""
        },
        {
            subject: "Secure your account",
            name: "Rena Quinn",
            from: "hecsoz@gi.mr",
            to: "war@fazjasmin.mw",
            start: "We need your help securing your account to prevent unauthorized access. For your safety, click the link below to confirm your information.",
            end: ""
        },
        {
            subject: "Login",
            name: "Rosie Curtis",
            from: "leusa@uldacpe.ir",
            to: "vaete@zonkok.sy",
            start: "Due to a connection from an unknown device, your account has been frozen temporarily. To protect it, please click on the following link to confirm it.",
            end: "This will help protect you in the future. This process does not take more than 3 minutes."
        },
        {
            subject: "Login",
            name: "Rosie Curtis",
            from: "leusa@uldacpe.ir",
            to: "vaete@zonkok.sy",
            start: "Please be aware that your PayPal Account expires in less than 48 H. Therefore, it is indispensable to perform an audit of your data. Otherwise, your account will be destroyed. Just click the link below.",
            end: ""
        }
    ];

    messages = messages.map((message) => {
        return {
            to: message.to,
            from: message.from,
            name: message.name,
            subject: message.subject,
            body: {
                link: {
                    normal: (
                        <>
                            <Box px={4}>
                                <Link>https://xyz.xyz/randomLink</Link>
                            </Box>
                        </>
                    )
                },
                text: [
                    {
                        start: (
                            <>
                                <Text>{message.start}</Text>
                            </>
                        ),
                        end: (
                            <>
                                <Text>{message.end}</Text>
                            </>
                        ),
                        properties: ["grammar", "spelling"]
                    },
                    {
                        start: (
                            <>
                                <Text>
                                    {
                                        createGrammaticalErrors({
                                            description: spellingTrained
                                                ? message.start
                                                : createSpellingErrors({
                                                      description: message.start
                                                  })
                                        })[0]
                                    }
                                </Text>
                            </>
                        ),
                        end: (
                            <>
                                {
                                    createGrammaticalErrors({
                                        description: spellingTrained
                                            ? message.start
                                            : createSpellingErrors({
                                                  description: message.end
                                              })
                                    })[0]
                                }
                            </>
                        ),
                        properties: []
                    },
                    {
                        start: (
                            <>
                                <Text>
                                    {
                                        createGrammaticalErrors({
                                            description: spellingTrained
                                                ? message.start
                                                : createSpellingErrors({
                                                      description: message.start
                                                  })
                                        })[1]
                                    }
                                </Text>
                            </>
                        ),
                        end: (
                            <>
                                {
                                    createGrammaticalErrors({
                                        description: spellingTrained
                                            ? message.start
                                            : createSpellingErrors({
                                                  description: message.end
                                              })
                                    })[1]
                                }
                            </>
                        ),
                        properties: []
                    }
                ]
            }
        };
    });

    messages = messages.map((message) => {
        return {
            ...message,
            body: {
                ...message.body,
                text: _.shuffle(message.body.text)
            }
        };
    });

    messages = _.shuffle(messages);
    return messages;
}

export default createEmails;
