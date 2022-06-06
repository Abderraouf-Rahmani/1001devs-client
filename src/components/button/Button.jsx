import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"
export default function Button({text, targetLink}) {
  return (
    <Link to={targetLink} >
            <div className="read-more">
              {text}
            </div>
    </Link>
  )
}
