import express from 'express'
import cors from 'cors'
import { urlencoded, json } from 'body-parser'
import { 
    mainRoutes,
    listRoutes, 
    exceptionRoutes 
} from './routes'

const app = express()

/**
 * Middlewares
 */
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))

/**
 * Register Routes
 */
app.use(mainRoutes)
app.use('/lists', listRoutes)
app.use(exceptionRoutes)

/**
 * Start Express Server
 */
app.listen(3000, () => console.log('App listening on port 3000!'))
