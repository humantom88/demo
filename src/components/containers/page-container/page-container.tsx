import React from 'react'

import style from './style.css'

export const PageContainer: React.FC = ({ children }) => {
  return <div className={style.container}>{children}</div>
}
