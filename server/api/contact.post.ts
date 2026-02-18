import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, message } = body

  const { data, error } = await resend.emails.send({
    // from: 'Contact <contact@franc-prix.vercel.app>',
    from: 'FRANCPRIX <onboarding@resend.dev>',
    // from: 'judedokpo@gmail.com',
    to: [`${process.env.MAIL_TO_1}`],
    // to: ['camoesdokpa@gmail.com'],
    subject: `Nouveau message de ${name}`,
    html: `
      <h3>Nouveau message</h3>
      <p>Nom: ${name}</p>
      <p>Email: ${email}</p>
      <p>${message}</p>
    `
  })

  if (error) {
    return { success: false, error }
  }

  return { success: true }
})
