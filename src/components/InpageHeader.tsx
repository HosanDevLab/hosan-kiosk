import classNames from "classnames";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

interface InpageHeaderProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements["div"]> {
  title: string;
  spaceHeight?: boolean;
}

export default function InpageHeader({
  title,
  spaceHeight,
  className,
  ...props
}: InpageHeaderProps) {
  return (
    <>
      <div
        className={classNames(
          "fixed z-[99999] grid grid-cols-3 items-center h-16 top-0 left-0 right-0 px-4 w-full animate-fadein transition-all duration-300 border-b border-gray-200/25 bg-black/10 backdrop-blur-md",
          className
        )}
        {...props}
      >
        <div className="col-span-1">
          <Link to="/">
            <button
              type="button"
              className="flex items-center gap-3 py-2 px-5 my-auto rounded-xl text-xl border border-white/30 hover:bg-white/50 hover:text-black hover:shadow-xl transition-all duration-300"
            >
              <FiArrowLeft size={28} />
              메인으로
            </button>
          </Link>
        </div>
        <h4 className="col-span-1 text-center font-semibold transition-all duration-300">
          {title}
        </h4>
        <div className="col-span-1"></div>
      </div>
      {spaceHeight && <div className="h-16" />}
    </>
  );
}
