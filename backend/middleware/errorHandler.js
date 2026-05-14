const errorHandler = (err, req, res, next) => {
  console.error('❌', err.message)

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message)
    return res.status(400).json({ success: false, message: messages[0] })
  }

  // Mongoose duplicate key (e.g. unique email)
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'Duplicate field value — entry already exists',
    })
  }

  // Default server error
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  })
}

module.exports = errorHandler