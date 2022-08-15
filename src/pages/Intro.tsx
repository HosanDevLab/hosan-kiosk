import { useEffect, useState } from "react";
import { FiArrowLeft, FiChevronDown, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/gallery/1.png";
import img2 from "../assets/gallery/2.png";
import { animateScroll } from "react-scroll";

const SECTIONS = [
  {
    title: "벚꽃이 예쁜 봄의 학교, 호산고",
    backgroundImage: img1,
  },
  {
    title: "아름다운 학교, 호산고",
    backgroundImage: img2,
  },
];

export default function Intro() {
  const [showImage, setShowImage] = useState(false);
  const [page, setPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      if (isScrolling) return;

      window.scrollTo(0, page * window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <>
      <div
        className={`fixed z-[99999] grid grid-cols-3 items-center h-20 top-0 left-0 right-0 px-4 w-full animate-fadein transition-all duration-300 ${
          showImage
            ? ""
            : "border-b border-gray-200/25 bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="col-span-1">
          <button
            type="button"
            className="flex items-center gap-3 py-3 px-5 my-auto rounded-xl text-xl bg-white shadow-xl transition-all duration-300"
            onClick={() => {
              if (showImage) {
                setShowImage(false);
              } else {
                navigate("/");
              }
            }}
          >
            {showImage ? <FiX size={28} /> : <FiArrowLeft size={28} />}
            {showImage ? "닫기" : "메인으로"}
          </button>
        </div>
        <h2
          className={`col-span-1 text-center font-bold text-white transition-all duration-300 ${
            showImage ? "opacity-0" : ""
          }`}
        >
          호산고 갤러리
        </h2>
        <div className="col-span-1"></div>
      </div>

      {SECTIONS.map((section) => {
        return (
          <section
            className="h-screen w-screen flex pt-10 relative"
            style={{
              background: `url(${section.backgroundImage}) center no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ${
                showImage ? "" : "bg-black/30"
              }`}
            />
            <div
              className={`my-auto container mx-auto text-white drop-shadow-2xl animate-floatup transition-all duration-300 ${
                showImage ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <h1 className="text-6xl font-semibold mb-8">{section.title}</h1>
              <button
                type="button"
                className="bg-white/75 text-black/75 text-xl font-semibold rounded-xl px-7 py-2.5"
                onClick={() => setShowImage(true)}
              >
                사진 보기
              </button>
            </div>
          </section>
        );
      })}

      <div
        className={`fixed cursor-pointer flex bottom-0 h-36 left-0 right-0 bg-gradient-to-t from-black/80 ${
          showImage ? "opacity-0 pointer-events-none" : ""
        }`}
        onClick={(e) => {
          if (isScrolling) return;

          const toPage = page + 1 > SECTIONS.length - 1 ? 0 : page + 1;
          setIsScrolling(true);
          animateScroll.scrollTo(toPage * window.innerHeight, {
            duration: 1500,
            smooth: "easeInOutQuart",
            ignoreCancelEvents: true,
          });
          setTimeout(async () => {
            setIsScrolling(false);
            setPage(toPage);
          }, 1500);
        }}
      >
        <div className="mx-auto flex items-center gap-4 text-white animate-bounce mt-auto">
          <FiChevronDown size={64} color="white" />
          <span className="text-lg font-medium">다음 페이지</span>
        </div>
      </div>
    </>
  );
}
