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
      theme = 'bg-purple-600 px-4 py-2 hover:bg-purple-700'
      break

    case 'secondary':
      theme = 'bg-purple-400 px-4 py-2 hover:bg-purple-600'
      break

    case 'third':
      theme = 'bg-gray-900 px-4 py-2 hover:bg-purple-950'
      break

    case 'iconPrimary':
      theme =
        'bg-gray-900 text-white text-sm px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-purple-600'
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
