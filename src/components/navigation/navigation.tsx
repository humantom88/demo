import React, { FC } from 'react'
import { Image, ImageName } from '../Image/index'
import { NavLink } from './index'

import style from './style.css'

interface NavigationProps {
  links: Record<string, string>
}

export const Navigation: FC<NavigationProps> = ({ links }: NavigationProps) => (
  <nav className={style.nav}>
    <Image name={ImageName.logo} />
    <ul>
      {Object.entries(links).map(([name, path]: [string, string]) => (
        <li key={name} className={style.nav}>
          <NavLink to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
