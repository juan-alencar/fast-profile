import { StaticImageData } from 'next/image'

export interface IProjectCard {
  title: string
  description: string
  repository: string
  productionUrl: string
  imageUrl: string | StaticImageData | null
}

export interface Project extends IProjectCard {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
}
