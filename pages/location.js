import Image from "next/image";

export default function LocationPage() {
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
          <div className="w-1/2 mx-auto py-20 bg-white relative grid grid-cols-4 grid-rows-3 gap-10 ">
            <div className="relative h-48 w-48">
              <Image layout="fill" objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover"/>
            </div>
            <div className="relative">
              <Image layout="fill" objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover"/>
            </div>
            <div className="relative" style={{"grid-column": "3/5", "grid-row": "1/3"}}>
              <Image layout="fill" objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover"/>
            </div>
            <div className="relative " style={{"grid-column": "1/3", "grid-row": "2/4"}}>
              <Image layout="fill" objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover"/>
            </div>
            <div className="relative">
              <Image layout="fill" objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover"/>
            </div>
            <div className="relative">
              <Image layout="fill" objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover"/>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 bg-gradient-to-b text-white flex flex-col justify-center items-center py-20 pb-36 px-40">
          <div className="text-7xl w-3/4 text-center leading-normal font-mono">
            Our Packages
          </div>
          <div className="text-lg w-1/2 text-center text-gray-300 mt-5 text-gray-300">
            Curabitur justo dolor, gravida at elementum at, imperdiet vel tellus. Pellentesque gravida mollis ante,
            posuere sollicitudin libero.
          </div>
          <div className="w-3/4 grid grid-cols-2 text-center mt-12">
            <div>
              <Image width={550} height={600} objectPosition="left" src="/fox.jpg"
                     className="rounded-xl object-center object-cover "/>
              <div className="mt-8 text-base space-y-2">
                <div className="text-sm text-gray-300">CATEGORY</div>
                <div className="text-2xl font-bold">5 days drip in Uganda</div>
                <div className="font-mono text-xl text-gray-300">€999.00</div>
              </div>
            </div>
            <div>
              <Image width={550} height={600} objectPosition="left" src="/fox.jpg"
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
          <div></div>
        </div>

      </div>
  );
}
