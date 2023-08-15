import { Competence } from './Competence'
import { Experience } from './Experience'
import { Feedback } from './Feedback'
import { Project } from './Project'

export interface User {
  id: string
  firstName: string
  lastName: string
  about: string
  actualRole: string
  actualRoleDescription: string
  photoUrl: any
  birthday: string
  email: string
  username: string
  linkedin: string
  github: string
  phone: string
  isActive: boolean
  projects: Project[]
  competences: Competence[]
  experiences: Experience[]
  feedbacks: Feedback[]
}
