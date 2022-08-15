import logo from "../hosan.png";

export default function Header() {
  return (
    <div className="flex items-center gap-8 my-8">
      <hr className="flex-grow" />
      <img src={logo} className="w-14 h-14" />
      <hr className="flex-grow" />
    </div>
  );
}
