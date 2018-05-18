import express              from 'express'
import cors                 from 'cors'
import { 
    mainRoutes,
    listRoutes, 
    exceptionRoutes 
}                           from './routes'

const app = express()
app.use(cors())

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
