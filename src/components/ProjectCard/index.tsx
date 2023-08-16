import Image from 'next/image'
import { FC } from 'react'
import DefaultImage from './assets/DefaultImage.jpg'
import { IProjectCard } from '@/types/Project'
import Link from 'next/link'
import Btn from '../Btn'
import { SiGithub } from 'react-icons/si'

const ProjectCard: FC<IProjectCard> = ({
  title,
  description,
  imageUrl,
  productionUrl,
  repository,
}) => {
  return (
    <div className="flex flex-col bg-gray-900 rounded-2xl">
      <Image
        alt="Banner do Projeto"
        width={300}
        height={100}
        src={imageUrl || DefaultImage}
        className="flex w-full max-h-40 object-cover object-center rounded-t-2xl"
      />
      <div className="flex flex-col p-6 gap-4 border-t-4 border-purple-600 max-w-[320px]">
        <div>
          <h1 className="text-xl font-bold uppercase">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={repository} target="_blank">
            <Btn variant="iconPrimary">
              <SiGithub className="h-5 w-5 " />
            </Btn>
          </Link>
          <Link href={productionUrl} target="_blank">
            <Btn text="" variant="primary">
              LINK DO PROJETO
            </Btn>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
