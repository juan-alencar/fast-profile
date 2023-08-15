import { FC } from 'react'

interface ICompetenceCard {
  props: string
}

const CompetenceCard: FC<ICompetenceCard> = ({ props }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-900 w-full p-4 rounded-2xl">
      <h1>ReactJS</h1>
      <div className="flex relative w-full">
        <div className="absolute bg-gray-800 rounded top-0 h-1 w-full" />
        <div className="absolute flex bg-purple-600 rounded top-0 h-1 w-1/2 items-center">
          <div className="absolute h-3 w-3 rounded-full bg-purple-600 right-0"></div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className=" text-sm text-gray-400">Básico</p>
        <p className=" text-sm text-gray-400">Intermediário</p>
        <p className=" text-sm text-gray-400">Avançado</p>
      </div>
    </div>
  )
}

export default CompetenceCard
