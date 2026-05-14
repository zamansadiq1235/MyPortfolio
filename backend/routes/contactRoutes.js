const express = require('express')
const router  = express.Router()
const { body } = require('express-validator')
const { sendMessage, getMessages } = require('../controllers/contactController')
const validate = require('../middleware/validate')

// Validation rules for the contact form
const contactRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name too long'),
  body('email')
    .trim()
    .isEmail().withMessage('Valid email required')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('10–2000 characters'),
]

// POST /api/contact  — submit form
router.post('/', contactRules, validate, sendMessage)

// GET  /api/contact  — view all messages (add auth middleware later)
router.get('/', getMessages)

module.exports = router