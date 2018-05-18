import { Router } from 'express'

const mainRoutes = Router()

/**
 * Defines a main route, just in case
 */
mainRoutes.get('/', (req, res) => {
    res.json({ message: 'The Ultimate TODO List!' })
})

export default mainRoutes