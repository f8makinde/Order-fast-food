import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, disabled, to, type, onClick}) => {
  const base = "text-sm bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles =  {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small:  base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
    round: base + ' py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
    secondary: "px-4 text-sm py-2.5 md:px-6 md:py-3.5 border-2 border-stone-200 uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-800 hover:text-stone-400 focus:text-stone-800 transition-colors duration-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed"
  }

  if(to){
    return <Link to={to} className={styles[type]}>{children}</Link>
  }
  if(onClick){
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
      </button>
    )
  }
  return (
    <button disabled={disabled} className={styles[type]}>
    {children}
    </button>
  )
}

export default Button
