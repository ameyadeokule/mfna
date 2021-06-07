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
    <Heading heading='red heading' />
  <h1 className={styles.header}>Hello World</h1>
</div>
}
