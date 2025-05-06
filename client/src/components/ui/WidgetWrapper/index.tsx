import { ReactNode } from 'react'
import classNames from 'classnames'

const WidgetWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={classNames(
        'dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default WidgetWrapper
