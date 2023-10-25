
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowButtonProps {
  onClick: () => void;
}

const NextBtn : React.FC<ArrowButtonProps> = ({onClick}) => {
  return (
    <button 
    onClick={onClick} 
    className="absolute top-1/2 left-4 w-11 h-11 z-50 bg-thirth text-white rounded-full flex items-center justify-center font-semibold">
      <ChevronLeft/>
    </button>
  );
};
const PrevBtn: React.FC<ArrowButtonProps> = ({onClick}) => {
  return (
    <button 
    onClick={onClick} 
    className="absolute top-1/2 right-4 w-11 h-11 z-50 bg-thirth text-white rounded-full flex items-center justify-center font-semibold">
      <ChevronRight/>
    </button>
  );
};

export const settings = {
  dots: false,
  infinite: true,
  fade: true,
  arrows:false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextBtn onClick={() => {}}/>,
  prevArrow: <PrevBtn onClick={() => {}}/>,
};
