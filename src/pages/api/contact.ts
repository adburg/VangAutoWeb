import type { NextApiRequest, NextApiResponse } from "next";
import formData from 'form-data'
import Mailgun from 'mailgun.js'

const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.MAILGUN_DOMAIN

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
console.log("Data", req.body)


const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

const {name, phone, regNr, message, type} = req.body

const messageData = {
  from: 'Kontaktskjema <time@sandbox4a03d6cedf8c40f0be926b8c67667cad.mailgun.org>',
  to: 'per.asbjorn@vangauto.no',
  subject: 'Bestilling skjema nettside',
  text: `Hei, du har mottatt en bestilling på nettsiden fra: ${name}
  Telefon: ${phone} 
  RegNr: ${regNr}
  Type tjeneste: ${type}
  Om oppdraget: 
  ${message}`,
}

try {
const emailRes = await client.messages.create(DOMAIN, messageData)
console.log(emailRes)
}catch(err:any){
    console.error('Error sending email', err)
}

    res.status(200).json({submitted: true})
}