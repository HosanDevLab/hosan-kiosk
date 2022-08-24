import InpageHeader from "../components/InpageHeader";
import bgImage from "../assets/gallery/4.png";

export default function Meal() {
  return (
    <>
      <InpageHeader title="급식 정보" className="text-white" />

      <div
        className="w-screen min-h-screen relative"
        style={{
          background: `url(${bgImage}) center no-repeat`,
        }}
      >
        <div className="absolute animate-floatup text-white bg-black/30 inset-0 transition-all duration-30 backdrop-blur-[6px]">
          <div className="h-16" />
          <div className="container flex flex-col gap-10 mx-auto py-10">
            asdf
          </div>
        </div>
      </div>
    </>
  );
}
