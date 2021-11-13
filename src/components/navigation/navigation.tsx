import React, { FC } from 'react'

import { Image, ImageName } from '../Image/index'
import { NavLink } from './index'

import style from './style.css'

interface NavigationProps {
  links: Record<string, string>
}

export const Navigation: FC<NavigationProps> = ({ links }: NavigationProps) => (
  <nav className={style.nav}>
    <NavLink to={'/'}>
      <Image name={ImageName.logo} />
    </NavLink>
    <ul>
      {Object.entries(links).map(([name, path]: [string, string]) => (
        <li key={name} className={style.nav}>
          <NavLink className={style.navLink} to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
    <div>Stuff</div>
  </nav>
)
