import { NextApiRequest, NextApiResponse } from "next"

export default (req:NextApiRequest, res:NextApiResponse) => {
	console.log('Request', req.body)
	const random : number = Math.floor(Math.random()*10)
    res.status(200).json({ response: random })
}
