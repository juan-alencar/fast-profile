import { FC, ReactElement } from 'react'

interface BtnProps {
  text?: string
  variant?: 'primary' | 'secondary' | 'third' | 'iconPrimary'
  children?: ReactElement | string | any
  className?: string
}

const Btn: FC<BtnProps> = ({
  text,
  variant = 'primary',
  children,
  className,
}) => {
  let theme = ''
  switch (variant) {
    case 'primary':
      theme = 'bg-purple100 px-4 py-2 hover:bg-purple300'
      break

    case 'secondary':
      theme = 'bg-purple200 px-4 py-2 hover:bg-purple300'
      break

    case 'third':
      theme = 'bg-purple500 px-4 py-2 hover:bg-purple300'
      break

    case 'iconPrimary':
      theme =
        'bg-purple500 text-purple100 text-sm px-2 py-2 rounded-lg hover:bg-purple300 hover:text-white'
  }

  return (
    <button
      className={`flex gap-2 ${theme} text-sm rounded-lg font-bold transition items-center ${className}`}
    >
      {children}
    </button>
  )
}
export default Btn
