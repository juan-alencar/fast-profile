import { FC } from 'react'

interface IFeedbackCard {
  props: string
}
const FeedbackCard: FC<IFeedbackCard> = ({ props }) => {
  return (
    <div className="bg-purple500 p-8 rounded-2xl">
      <p className="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        explicabo dicta dolorem, laboriosam quibusdam tempora labore eveniet
        molestias, cumque pariatur quasi consequuntur obcaecati, facilis id modi
        nemo commodi et voluptatum?
      </p>
      <div className="flex gap-4 ">
        <div className="bg-purple100 h-12 w-12 rounded-full" />
        <div>
          <p>Juan Alencar</p>
          <span className="text-sm text-purple100 ">
            CTO - Manaíra Serviços
          </span>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
