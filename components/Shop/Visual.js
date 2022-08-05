import Image from "next/image";
import baseApiUrl from "../../utils/baseApiUrl";

const Visual = () => {
  return (
    <section id="shop-visual" className="shop-visual">
      <div className="box container mx-xl">
        <Image
          src={`${baseApiUrl}/uploads/mockup2_da47882e46.png?updated_at=2022-08-04T13:03:03.841Z`}
          width={360}
          height={576}
        />
        <div className="vis_txt">
          <div className="vis_txt_img">
            <Image
              src={`${baseApiUrl}/uploads/vis_logo_e2e13df7e8.png?updated_at=2022-07-29T06:59:36.522Z`}
              width={57}
              height={58}
            />
            <span className="shop">Shops</span>
          </div>
          <div className="vis_txt_txt">
            <strong>
              다양한 쇼핑을 <br />
              직접 경험해보세요!
            </strong>
            <p>
              내가 소비자라는 마음으로, <br />
              쇼프 안심 쇼핑
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visual;
