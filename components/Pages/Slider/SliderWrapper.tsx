'use client'

import Slider from "react-slick";
import Slide from "./Slide";
import { settings } from "./sliderSettings";

  
  interface Props {
    data: Texts[]
  }

const SliderWrapper: React.FC<Props> = ({data}) => {
    return ( 
        <div className="w-full xl:aspect-[3/1] relative max-xl:hidden">
                {data?.length > 0 ?
                <Slider {...settings}>
                    {data?.map((item, i ) => (
                        <Slide
                        key={i}
                        item={item}
                        />
                    ))}
                </Slider>
                :
                <p className="text-sm font-semibold text-center py-6">
                    Henüz yazı seçmediniz...
                </p>
                }
        </div>
    );
}

export default SliderWrapper;