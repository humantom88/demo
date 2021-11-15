import React from 'react'
import classnames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'

import style from './link.style.css'

export const NavLink: React.FC<LinkProps> = (props: LinkProps) => (
  <Link {...props} className={classnames(style.link, props.className)} />
)
