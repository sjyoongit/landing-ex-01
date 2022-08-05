import baseApiUrl from "../../utils/baseApiUrl";
import Image from "next/image";

const Prize = () => {
  return (
    <>
      <section id="prize" className="prize">
        <div className="box container mx-xl">
          <ul className="flex justify-center">
            <li className="mr-4" data-aos="fade-right">
              <Image
                src={`${baseApiUrl}/uploads/11_fc827ce924.jpg?updated_at=2022-08-04T13:05:58.905Z`}
                width={494}
                height={78}
              />
            </li>
            <li data-aos="fade-left">
              <Image
                src={`${baseApiUrl}/uploads/12_254e57fa94.jpg?updated_at=2022-08-04T13:05:58.904Z`}
                width={494}
                height={78}
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Prize;
