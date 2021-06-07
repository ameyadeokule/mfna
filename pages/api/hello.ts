// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import jwt from 'jsonwebtoken'
const KEY = 'asdasldahskdlahslhdl'

export default (req:NextApiRequest, res:NextApiResponse) => {
  !req.body ? res.statusCode = 404 : 0
  const {username , pass} = req.body
  
  res.status(200).json({ token: jwt.sign({
    username,
    admin: username === 'admin' && pass === 'admin'
  },KEY) })
}
