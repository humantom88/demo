import React from 'react'
import style from './style.css'

import { Panel } from '../../components/containers/panel/panel'
import { Avatar } from './components/avatar'
import { Skills } from './components/skills'

export const Agent = () => (
  <div className={style.agent}>
    <Panel>
      <Avatar />
      <Skills />
    </Panel>
  </div>
)
