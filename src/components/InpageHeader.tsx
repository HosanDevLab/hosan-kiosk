import classNames from 'classnames';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

interface InpageHeaderProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  title: string;
  spaceHeight?: boolean;
  mainButton?: boolean;
  left?: React.ReactNode;
}

export default function InpageHeader({
  title,
  spaceHeight,
  className,
  mainButton = true,
  left,
  ...props
}: InpageHeaderProps) {
  return (
    <>
      <div
        className={classNames(
          'fixed z-[99999] grid grid-cols-3 items-center h-28 top-0 left-0 right-0 px-4 w-full animate-fadein transition-all duration-300 border-b border-gray-200/25 bg-black/10 backdrop-blur-md',
          className
        )}
        {...props}
      >
        <div className="col-span-1 flex gap-4 overflow-x-auto">
          {mainButton && (
            <Link href="/">
              <button
                type="button"
                className="flex items-center gap-5 py-2 px-5 my-auto rounded-xl text-4xl border border-white/30 hover:bg-white/50 hover:text-black hover:shadow-xl transition-all duration-300"
              >
                <FiArrowLeft size={48} />
                메인으로
              </button>
            </Link>
          )}
          {left}
        </div>
        <h4 className="col-span-1 text-center text-5xl font-medium transition-all duration-300">
          {title}
        </h4>
        <div className="col-span-1"></div>
      </div>
      {spaceHeight && <div className="h-16" />}
    </>
  );
}
