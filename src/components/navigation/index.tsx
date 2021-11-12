import React, { FC } from 'react'
import { Image, ImageName } from '../Image/index'

import style from './style.css'

interface NavigationProps {
  links: Record<string, string>
}

export const Navigation: FC<NavigationProps> = ({ links }: NavigationProps) => (
  <nav className={style.nav}>
    <Image name={ImageName.logo} />
    <ul>
      {Object.entries(links).map(([link, path]: [string, string]) => (
        <li key={link} className={style.nav}>
          {link}
        </li>
      ))}
    </ul>
  </nav>
)
