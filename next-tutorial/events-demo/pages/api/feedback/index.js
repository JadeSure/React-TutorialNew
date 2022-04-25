import fs from 'fs'
import path from 'path'

function buildFeedbackPath(){
    return path.join(process.cwd(), 'data', 'feedback.json')
}

export function extractFeedback(){
    const filePath = buildFeedbackPath()
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    return {data, filePath}
}

export default function handler(req, res) {

    if(req.method === 'POST'){
        const email = req.body.email;
        const text = req.body.text;
        
        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text
        }
       
        const {data, filePath} = extractFeedback()
        data.push(newFeedback)
        fs.writeFileSync(filePath, JSON.stringify(data))
        return res.status(201).json({message: 'Success!', feedback: newFeedback})
    }

    if(req.method === 'GET'){
        const {data} = extractFeedback()
        return res.status(201).json(data)
    }
    res.status(200).json({message: 'This works!'})
   
  }
  