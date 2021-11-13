import React from 'react'
import classnames from '../../../../node_modules/classnames/index'
import { Link, LinkProps } from '../../../../node_modules/react-router-dom/index'

import style from './link.style.css'

export const NavLink: React.FC<LinkProps> = (props: LinkProps) => (
  <Link {...props} className={classnames(style.link, props.className)} />
)
