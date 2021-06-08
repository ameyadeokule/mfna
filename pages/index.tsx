import { useEffect } from 'react'
import Link from 'next/link'

import styles from './page1.module.css'

function Heading (props){
  return <div>
    <h1>{props.heading}</h1>
    <style jsx>
      {`
        h1{
          color:red;
        }
      `}
    </style>
  </div>
}

export default function Home() {
  return<div> 
    <form method='POST' action='/api/hello'>
      <input type='text' name='username' value='admin' />
      <br />
      <input type='password' name='pass' value='admin' />
      <br />
      <input type='submit' value='Login' />
    </form>
    <Link href='/page1'>To page 1</Link>
</div>
}
