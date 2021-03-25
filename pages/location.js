import Image from "next/image";

const data = ['/tiger.jpg', '/horse.jpg', '/rabbit.jpg', '/ireland.jpg', '/kingfisher.jpg', '/fox.jpg']

export default function LocationPage() {
  return (
      <div>
        <div
            className="bg-gray-700 bg-gradient-to-b text-white flex flex-col justify-center items-center pt-4 pb-14 px-40">
          <div className="text-6xl w-3/4 text-center leading-normal">
            Zanzibar - Nairobi
          </div>
          <div className="text-3xl w-3/4 text-center leading-normal">
            €3,380
          </div>
          <div className="text-lg text-center text-gray-300 mt-2">
            34 DAYS THROUGH TANZANIA, KENYA,UGANDA
          </div>
          <div className="text-lg text-center text-gray-300 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="mr-8 font-bold text-base text-blue-500 hover:underline cursor-pointer">
              <i className="uis uil-envelope-alt mr-2"/>
              <span>Get in touch</span>
            </div>
            <button
                className="  flex-shrink-0 bg-blue-700 text-white text-2xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">
              Buy now
            </button>
          </div>

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
          <div className="text-xl w-3/4 text-center leading-normal font-bold">
            ESSENTIAL INFO
          </div>
          <div className="text-lg w-1/2 text-center text-gray-300 mt-5 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus, sedhabitasse dignissim euismod id
            fames duis fusce. Massa aenean velit nec.
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex flex-col justify-center items-center mr-10 font-bold text-base">
              <div className="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center">1</div>
              <div className="h-28 w-px bg-gray-400"/>
              <div className="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center">2</div>
              <div className="h-28 w-px bg-gray-400"/>
              <div className="bg-blue-600 h-8 w-8 rounded-full flex justify-center items-center">3</div>
            </div>
            <div className="space-y-7 w-1/2 flex flex-col justify-between items-start">
              <div className="flex justify-center items-center">
                <div
                    className="mr-3 bg-gray-600 rounded-full relative w-28 h-28 text-7xl flex flex-col justify-center items-center">
                  <i className="uil uil-star text-gray-400 mb-2"/>
                </div>
                <div className="text-xl">
                  <div className="font-bold">Transport</div>
                  <div className="font-light text-gray-300">Overland Expedition Vehicle, Jeep,Private Bus, Ferry</div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                    className="mr-3 bg-gray-600 rounded-full relative w-28 h-28 text-7xl flex flex-col justify-center items-center">
                  <i className="uil uil-star text-gray-400 mb-2"/>
                </div>
                <div className="text-xl w-5/6">
                  <div className="font-bold">Accom
                  </div>
                  <div className="font-light text-gray-300">Comfortable Hotel 4 nights, Camping 26 nights,Basic Hotel 1
                    nightMultishare Hostel 1 night, Camping without facilities 1 night
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                    className="mr-3 bg-gray-600 rounded-full relative w-28 h-28 text-7xl flex flex-col justify-center items-center">
                  <i className="uil uil-star text-gray-400 mb-2"/>
                </div>
                <div className="text-xl">
                  <div className="font-bold">Meals</div>
                  <div className="font-light text-gray-300">Breakfasts x 32,Lunches x 27, Dinners x 27
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-b flex flex-col justify-center items-center py-20 pb-36 px-40">
          <div className="text-xl w-3/4 text-center leading-normal text-red-400 font-bold">
            HIGHLIGHTS
          </div>
          <div className="w-3/4 grid grid-cols-2 grid-flow-row text-center mt-16 gap-12">
            {new Array(5).fill(0).map((item, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <div className="bg-gray-100 rounded-full relative w-12 h-12 text-3xl flex flex-col justify-center">
                    <i className="uil uil-star text-gray-300"/>
                  </div>
                  <div className="ml-8 text-left text-xl font-bold w-3/4">
                    Visit the Karen Blixen museum &Giraffe Sanctuary in Nairobi
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="h-80 py-28 relative">
          <Image src="/beach.jpg" layout="fill" objectPosition="center" className="object-center object-cover"/>
        </div>
      </div>
  );
}
