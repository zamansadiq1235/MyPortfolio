require('dotenv').config()
const express = require('express')
const cors    = require('cors')
const helmet  = require('helmet')
const morgan  = require('morgan')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')

const app = express()

// Connect to MongoDB
connectDB()

// Security & utility middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
  methods: ['GET', 'POST'],
  credentials: true,
}))

if (process.env.NODE_ENV === 'development') {
  app.use(cors())  // allow ALL origins in dev
} else {
  app.use(cors({ origin: process.env.CLIENT_ORIGIN }))
}

app.use(express.json({ limit: '10kb' }))

// Routes
app.use('/api/contact', require('./routes/contactRoutes'))

// Health check — test this first in browser
app.get('/api/health', (req, res) =>
  res.json({ status: 'ok', env: process.env.NODE_ENV })
)

// 404 handler
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Route not found' })
)

// Global error handler (must be last)
app.use(errorHandler)

const PORT = process.env.PORT || 9000
app.listen(PORT, () =>
  console.log(`\n🚀 Server running on http://localhost:${PORT}\n`)
)