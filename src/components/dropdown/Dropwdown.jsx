"use client"
import React, { useState } from 'react'
import styles from "./dropdown.module.css"
import Link from 'next/link'
const Dropwdown = (props) => {

  const {title,links} = props

  const [dropdown,setDropdown] = useState(false)

  const handleDropdown = ()=>{
    setDropdown(prev=>!prev)
  }
  return (
    <div className={styles.container}>
      <div className={styles.job}>
        <h1 className={styles.jobTitle} onClick={handleDropdown}>{title}</h1>
        <div className={styles.descContainer} style={dropdown ? {display:"flex"} :{display:"none"}}>
          <h2 className={styles.subTitle}>We're always hiring.</h2>
          <p className={styles.desc}>
            We hire people with broad skill sets who also exhibit deep
            expertise. While nobody at Valve has a job title, we do have certain
            fields that we're always looking to hire in.
          </p>
          <div className={styles.links}>
            {links.length>0 && links.map((link,i)=>(
              <Link href="#" key={i}>{links[i]}</Link>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropwdown