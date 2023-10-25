'use client'

import Slider from "react-slick";
import Slide from "./Slide";
import { settings } from "./sliderSettings";

interface DataItem {
    title?: string;
    text?: string;
    image: string;
  }
  
  interface Props {
    data: DataItem[];
  }

const SliderWrapper: React.FC<Props> = ({data}) => {
    return ( 
        <div className="w-full xl:aspect-[3/1] relative max-xl:hidden">
                <Slider {...settings}>
                    {data?.map((item, i ) => (
                        <Slide
                        key={i}
                        item={item}
                        />
                    ))}
                </Slider>
        </div>
    );
}

export default SliderWrapper;