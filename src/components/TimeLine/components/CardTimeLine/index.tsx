import { FC } from 'react'

interface ICardTimeLine {
  props: string
}

const CardTimeLine: FC<ICardTimeLine> = () => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-purple100 rounded-full mt-[30px] -left-1.5  dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="p-6 bg-purple500 rounded-2xl">
        <div className="flex gap-4 items-center mb-4">
          <time className="bg-purple100 p-1.5 rounded-md text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            04/2023 - 06/2023
          </time>
          <div className="h-1 w-1 bg-purple100 rounded-full" />
          <p className="leading-none">Btor Soluções Computacionais</p>
          <span className="text-purple100 text-xs leading-none">
            Atualmente
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Desenvolvedor de Software
        </h3>
        <p className="text-base font-normal text-gray200 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
          sit voluptatem optio accusantium! Debitis repudiandae nam deleniti
          quaerat, quis perspiciatis veritatis excepturi voluptatem placeat quo
          perferendis. Exercitationem, pariatur aut!
        </p>
      </div>
    </li>
  )
}

export default CardTimeLine
