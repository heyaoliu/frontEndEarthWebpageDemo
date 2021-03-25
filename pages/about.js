import Image from "next/image";

const data = ['/tiger.jpg', '/horse.jpg', '/rabbit.jpg', '/ireland.jpg', '/kingfisher.jpg', '/fox.jpg']


export default function AboutPage() {
  return (
      <div>
        <div
            className="bg-gray-700 bg-gradient-to-b text-white flex flex-col justify-center items-center pt-4 pb-14 px-40">
          <div className="text-7xl w-3/4 font-sans text-center leading-normal font-mono">
            Uganda
          </div>
          <div className="text-lg w-1/2 text-center text-gray-300 mt-2">
            orem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <button
              className="mt-10 ml-4 flex-shrink-0 bg-blue-700 text-white text-xl font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">
            Explore
          </button>
        </div>
        <div className="px-20">
          <div className="w-3/4 mx-auto py-20 bg-white relative grid grid-cols-4 grid-rows-3 gap-10 ">
            {data.map((url, index) => (
                    <div className={"relative" + ` grid-template-${index}`} key={index}>
                      <Image layout="fill" objectPosition="left" src={url}
                             className="rounded-xl object-center object-cover hover:opacity-90 cursor-pointer"/>
                    </div>
                )
            )}
          </div>
        </div>
        <div
            className="bg-gray-700 bg-gradient-to-b text-white flex flex-col justify-center items-center py-20 pb-36 px-40">
          <div className="text-7xl w-3/4 text-center leading-normal font-mono">
            Our Packages
          </div>
          <div className="text-lg w-1/2 text-center text-gray-300 mt-5 text-gray-300">
            Curabitur justo dolor, gravida at elementum at, imperdiet vel tellus. Pellentesque gravida mollis ante,
            posuere sollicitudin libero.
          </div>
          <div className="px-44 grid grid-cols-2 text-center mt-12 gap-10">
            <div>
              <Image width={550} height={600} objectPosition="center" src="/house1.jpg"
                     className="rounded-xl object-center object-cover "/>
              <div className="mt-8 text-base space-y-2">
                <div className="text-sm text-gray-300">CATEGORY</div>
                <div className="text-2xl font-bold">5 days drip in Uganda</div>
                <div className="font-mono text-xl text-gray-300">€999.00</div>
              </div>
            </div>
            <div>
              <Image width={550} height={600} objectPosition="center" src="/house2.jpg"
                      className="rounded-xl object-center object-cover"/>
              <div className="mt-8 text-base space-y-2">
                <div className="text-sm text-gray-300">CATEGORY</div>
                <div className="text-2xl font-bold">5 days drip in Uganda</div>
                <div className="font-mono text-xl text-gray-300">€999.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-20 pb-36 px-40">
          <div className="text-6xl w-3/4 text-center leading-normal font-mono">
            Uganda, The Pearl Of Africa
          </div>
          <div className="text-lg w-1/2 text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit vestibulum est, quis lobortis est
            aliquet et. Sed porttitor nisl vitae orci scelerisque fringilla in quis lectus.
          </div>

          <div className="flex justify-around w-full mt-12 text-sm">
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold text-base uppercase">Night Life</div>
              <ul className="space-y-1.5 mt-3">
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature One</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Two</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/> <span
                    className="text-gray-500">Long Feature Three</span>
                </li>
              </ul>
            </div>
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold text-base uppercase">Safari</div>
              <ul className="space-y-1.5 mt-3">
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature One</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Two</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature Three</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Fore</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature Five</span>
                </li>
              </ul>
            </div>
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold text-base uppercase">Markets</div>
              <ul className="space-y-1.5 mt-3">
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature One</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Two</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature Three</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Fore</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature Five</span>
                </li>
              </ul>
            </div>
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold text-base uppercase">Activities</div>
              <ul className="space-y-1.5 mt-3">
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature One</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Two</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Long Feature Three</span>
                </li>
                <li className="text-gray-400 cursor-default">
                  <i className="uis uis-check-circle text-xl mr-1"/>
                  <span className="text-gray-500">Feature Fore</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
            className="bg-gray-600 bg-gradient-to-b text-white flex flex-col justify-center items-center py-20 pb-36 px-40">
          <div className="text-5xl w-3/4 text-center leading-normal">
            Meet our Team
          </div>
          <div className="text-lg w-1/2 text-center text-gray-300 mt-5 text-gray-300">
            Curabitur justo dolor, gravida at elementum at, imperdiet vel tellus. Pellentesque gravida mollis ante,
            posuere sollicitudin libero.
          </div>
          <div className="w-3/4 grid grid-cols-3 grid-rows-3 text-center mt-16 gap-12">
            {new Array(9).fill(0).map((item, index) => (
                <div className="flex justify-center items-center">
                  <div className=" relative w-24 h-24">
                    <Image src="/head.jpg" layout="fill" objectPosition="center"
                           className="rounded-full object-center object-cover"/>
                  </div>
                  <div className="ml-5 text-left">
                    <div className="font-bold text-xl">
                      John Doe
                    </div>
                    <div className="text-lg text-gray-300">
                      Ehiopia Team Head
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
