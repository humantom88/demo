import React from 'react'
import classnames from 'classnames'

import style from './style.css'

export interface PanelProps {
  className?: string
}

export const Panel: React.FC<PanelProps> = ({ children, className }) => (
  <div className={classnames(style.panel, className)}>{children}</div>
)
