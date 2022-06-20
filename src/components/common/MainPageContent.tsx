import React, {useEffect, useRef} from "react";
import "./componentsStyles.scss";

const MainPageContent = () => {
  const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
      if ( inputRef.current !== null){

        inputRef.current?.focus();
      }
    }, []);
    console.log(inputRef);


  return (
    <div className="content-block">
      <div className="first-photo">
        <img src="https://fashionbunker.com/media/wysiwyg/bnkr-banner-staycay-2_1.jpeg" />
      </div>

      <div className="poster-content-wrapper">
        <div>
          <video
            poster="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_04/sb_20220420_desktop_P1_tops_poster._QL80_.jpg"
            loop
            autoPlay
            muted
            width="1110"
            height="750"
            controls
          >
            <source
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_04/sb_20220420_desktop_P1_tops._CB1650301547_.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="photos-under-poster">
          <img
            src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_04/sb_20220420_hp_card_visnav_tops_01._QL90_UX373_.jpg"
            alt="model"
          />
          <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_04/sb_20220420_hp_card_visnav_tops_02._QL90_UX373_.jpg" />
          <img src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_04/sb_20220420_hp_card_visnav_tops_03._QL90_UX373_.jpg" />
        </div>

        {/*<input ref={ inputRef} type="text" />*/}
      </div>
    </div>
  );
};

export default MainPageContent;
