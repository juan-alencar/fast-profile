import { FC } from 'react'
import CardTimeLine from './components/CardTimeLine'

interface ITimeLine {
  props: string
}

const TimeLine: FC<ITimeLine> = () => {
  return (
    <ol className="scrollbar pr-4 relative border-l-2 border-purple500 dark:border-gray-700 max-h-screen overflow-y-scroll scroll-smooth">
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
    </ol>
  )
}

export default TimeLine
