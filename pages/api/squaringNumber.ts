import { NextApiRequest, NextApiResponse } from "next"

export default (req:NextApiRequest, res:NextApiResponse) => {
	const num1 : number = +req.query.num1
    res.status(200).json({ square: num1*num1 })
}
