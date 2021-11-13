import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import style from './link.style.css'

export const NavLink: React.FC<LinkProps> = (props: LinkProps) => (
  <Link className={style.link} {...props} />
)
