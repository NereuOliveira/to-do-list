import { Router } from 'express'

/**
 * Here is where all the exception routes are going to be 
 * defined
 */
const exceptionRoutes = Router()

/**
 * Catch all, in cases where we don't have any matches on the 
 * previous routes, send a 404 response
 */
exceptionRoutes.all('*', (req, res) => {
    res.status(404).json({ 404: 'page not found' })
})

export default exceptionRoutes