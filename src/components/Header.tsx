import logo from '../assets/hosan.png';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center gap-8 my-8">
      <hr className="flex-grow" />
      <Image src={logo} width={180} height={180} alt="" />
      <hr className="flex-grow" />
    </div>
  );
}
