import { NextApiRequest, NextApiResponse } from "next"

export default (req:NextApiRequest, res:NextApiResponse) => {
	const random = Math.floor(Math.random()*10)
    res.status(200).json({ response: random })
}
