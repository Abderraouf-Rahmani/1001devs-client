import React from 'react'
import './pic.css'
export default function pic({username}) {
  return (
    <div>{username.substring(0,2).toUpperCase()}</div>
  )
}
