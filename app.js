import express              from 'express'
import cors                 from 'cors'
import { urlencoded, json } from 'body-parser'
import { 
    mainRoutes,
    listRoutes, 
    exceptionRoutes 
}                           from './routes'

const app = express()
app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())

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
