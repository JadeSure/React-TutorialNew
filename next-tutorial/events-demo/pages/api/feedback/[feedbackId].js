import {extractFeedback} from '.'

function handler (req, res){
    const feedbackId = req.query.feedbackId
    const {data} = extractFeedback()
    const selectedFeedback = data.find(feedback => {
        return feedback.id === feedbackId
    })

    res.status(200).json({feedback: selectedFeedback})
}

export default handler

// http://localhost:3000/api/feedback/2022-04-04T10:52:21.693Z