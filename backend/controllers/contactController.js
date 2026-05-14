const Contact    = require('../models/Contact')
const nodemailer = require('nodemailer')

// ── POST /api/contact ──────────────────────────────────────
exports.sendMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body

    // 1. Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
      ip: req.ip,
    })

    // 2. Send email notification (non-blocking — don't fail if email fails)
    sendEmailNotification({ name, email, message }).catch(err =>
      console.warn('Email send failed (non-critical):', err.message)
    )

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        createdAt: contact.createdAt,
      },
    })
  } catch (error) {
    next(error) // pass to global error handler
  }
}

// ── GET /api/contact (protected — admin only) ──────────────
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(50)
    res.json({ success: true, count: messages.length, data: messages })
  } catch (error) {
    next(error)
  }
}

// ── Helpers ────────────────────────────────────────────────
async function sendEmailNotification({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📬 New message from ${name}`,
    html: `
      <h2>New Portfolio Contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })
}