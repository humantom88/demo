import { Schema, model } from 'mongoose'

interface ICharacter {
  name: string
  hits: number
  avatar?: string
}

const schema = new Schema<ICharacter>({
  name: { type: String, required: true },
  hits: { type: Number, required: true },
  avatar: String
})

export const Character = model<ICharacter>('Character', schema)
