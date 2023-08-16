import { FC } from 'react'
import CardTimeLine from './components/CardTimeLine'

interface ITimeLine {
  props: string
}

const TimeLine: FC<ITimeLine> = () => {
  return (
    <ol className="relative">
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
      <CardTimeLine props="teste" />
    </ol>
  )
}

export default TimeLine
