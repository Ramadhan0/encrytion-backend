import multer from 'multer'
import { Router } from 'express'
import { uploadDocument } from './document.controller'

const documentRouter = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

documentRouter.post('/upload', upload.single('file'), uploadDocument)
// documentRouter.get('/upuup', (req, res) => res.send("test upload router"))

export default documentRouter
