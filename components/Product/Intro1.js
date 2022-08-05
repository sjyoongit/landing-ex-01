import baseApiUrl from "../../utils/baseApiUrl";
import Image from "next/image";

const Intro1 = () => {
  return (
    <>
      <section id="intro1" className="intro1">
        <div className="box container mx-xl">
          <div className="topBox flex justify-between items-center bg-amber-400 rounded-3xl">
            <div className="txtBox pl-14">
              <strong className="text-3xl text-black pb-4 block">
                안전한 배달
              </strong>
              <p className="text-slate-700">
                고객님이 안심할 수 있는 배달!
                <br />
                안전한 배달을 약속드립니다.
              </p>
            </div>
            <Image
              src={`${baseApiUrl}/uploads/02_1dcd1360e0.png?updated_at=2022-07-29T06:35:49.376Z`}
              width={500}
              height={409}
            />
          </div>
          <ul className="shopList flex flex-wrap justify-between">
            <li className=" text-center bg-zinc-900" data-aos="fade-down">
              <div className="imgBox py-14">
                <Image
                  src={`${baseApiUrl}/uploads/04_e74e5947ec.png?updated_at=2022-08-04T13:53:40.327Z`}
                  width={357}
                  height={357}
                />
              </div>
              <div className="descBox">
                <p className="bg-zinc-800 text-amber-400 font-medium py-7">
                  Stay on top of all
                  <br />
                  your goals
                </p>
              </div>
            </li>
            <li className=" text-center bg-zinc-900" data-aos="fade-down">
              <div className="imgBox py-14">
                <Image
                  src={`${baseApiUrl}/uploads/06_e71fd4458c.png?updated_at=2022-07-29T06:35:49.680Z`}
                  width={357}
                  height={357}
                />
              </div>
              <div className="descBox">
                <p className="bg-zinc-800 text-amber-400 font-medium py-7">
                  Get inspiration &
                  <br />
                  examples
                </p>
              </div>
            </li>
            <li className=" text-center bg-zinc-900" data-aos="fade-down">
              <div className="imgBox py-14">
                <Image
                  src={`${baseApiUrl}/uploads/07_0aa1abad33.png?updated_at=2022-08-04T13:52:35.768Z`}
                  width={357}
                  height={357}
                />
              </div>
              <div className="descBox">
                <p className="bg-zinc-800 text-amber-400 font-medium py-7">
                  Beat
                  <br />
                  procrastination
                </p>
              </div>
            </li>
            <li className=" text-center bg-zinc-900" data-aos="fade-down">
              <div className="imgBox py-14">
                <Image
                  src={`${baseApiUrl}/uploads/08_5fbdd49250.png?updated_at=2022-08-04T13:53:04.382Z`}
                  width={357}
                  height={357}
                />
              </div>
              <div className="descBox">
                <p className="bg-zinc-800 text-amber-400 font-medium py-7">
                  One step
                  <br />
                  at a time
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Intro1;
