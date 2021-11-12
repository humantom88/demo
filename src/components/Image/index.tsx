import React, { FC } from 'react'

export enum ImageName {
  logo = 'logo.png'
}

const DEFAULT_PATH = 'assets'

export interface ImageProps {
  name: ImageName
}

export const Image: FC<ImageProps> = ({ name }: ImageProps) => (
  <img src={`${DEFAULT_PATH}/${name}`} />
)
