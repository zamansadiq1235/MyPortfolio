const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name must be under 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [2000, 'Message must be under 2000 characters'],
    },
    ip: {
      type: String,   // optional: log sender IP for spam protection
      select: false,  // hidden from query results by default
    },
  },
  {
    timestamps: true, // auto-adds createdAt and updatedAt fields
  }
)

module.exports = mongoose.model('Contact', contactSchema)