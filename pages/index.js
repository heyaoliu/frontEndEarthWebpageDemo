import Image from "next/image";
import Star from "@components/star"

const data = [{
  name: "Uganda",
  url: "/fox.jpg"
},
  {
    name: "Kenya",
    url: "/fox.jpg"
  },
  {
    name: "Rwanda",
    url: "/fox.jpg"
  },
  {
    name: "Tanzania",
    url: "/fox.jpg"
  },
  {
    name: "Safari",
    url: "/fox.jpg"
  },
  {
    name: "Gorilla",
    url: "/fox.jpg"
  },
  {
    name: "Mountain climbing",
    url: "/fox.jpg"
  },
  {
    name: "Volunteering",
    url: "/fox.jpg"
  }]
export default function IndexPage() {
  return (
      <div>
        <div className="relative flex flex-col items-center justify-center">
          <Image objectPosition="center" layout="fill" src="/bg.jpg"
                 className="object-center object-cover pointer-events-none z-0"/>
          <div className=" bg-gradient-to-t from-black via-transparent to-transparent w-full z-10">
            <div className="relative flex flex-col justify-center items-center py-52 space-y-12 z-10">
              <div className="text-5xl text-white">
                Adventure Fills Your Soul
              </div>
              <div className="w-24 h-1.5 bg-blue-500"/>
              <div className="flex flex-row justify-between w-1/3">
                <input placeholder="Text"
                       className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-gray-700 text-white placeholder-gray-400 shadow-md rounded-lg text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
                <button
                    className="ml-2.5 flex-shrink-0 bg-blue-700 text-white text-xl font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
            className="bg-gray-700 bg-gradient-to-b text-white flex flex-col justify-center items-center py-20 px-40 space-y-12">
          <div className="text-6xl w-3/4 font-sans text-center leading-normal">
            Get the best packages for your next visit to Africa
          </div>
          <div className="text-2xl  w-1/2 text-center text-gray-300">
            Lorizzle gizzle boofron mammasay mammasa mamma oo sa amizzle, bling bling adipiscing elizzle.
          </div>
          <button
              className="ml-4 flex-shrink-0 bg-blue-700 text-white text-xl font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">
            Explore
          </button>
        </div>
        <div className="py-20">
          <div className="grid px-96 grid-cols-2 gap-10 grid-flow-row">
            {
              data.slice(0, 4).map(({name, url}) => (
                  <div className="relative h-72" key={name}>
                    <Image layout="fill" src={url} className="object-center object-cover rounded-xl hover:opacity-90 cursor-pointer"/>
                    <div className="text-white font-serif text-3xl absolute text-center bottom-5 left-1/2 transform -translate-x-1/2">{name}
                    </div>
                  </div>)
              )}

          </div>
          <div className="mt-10 px-96 grid grid-cols-4 gap-10">
            {
              data.slice(4, 8).map(({name, url}) => (
                  <div className="relative h-72" key={name}>
                    <Image layout="fill" objectPosition="left" src={url}
                           className="object-center object-cover rounded-xl hover:opacity-90 cursor-pointer"/>
                    <div
                        className="text-white font-serif text-3xl absolute text-center bottom-5 left-1/2 transform -translate-x-1/2">
                      {name}
                    </div>
                  </div>
              ))
            }
          </div>
        </div>

        <div
            className="bg-gray-700 text-white flex justify-around items-center py-36 px-40">
          {[
            {
              title: "Team",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quam nunc eu in. Seddiam bibendum amet, ante eget vitae. Aliquam scelerisque diam, sagittis orci cursus. Est id id lorem scelerisque suscipit id lobortis.Enim."
            },
            {
              title: "Blog",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui et tellus hac sit tincidunt varius sit quis.Laoreet feugiat at molestie pretium ornare. Proin placerat egestas quis porttitor ac lectus pretium, in vel. Pretium eget."
            },
            {
              title: "Videos",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales fringilla feugiat condimentum non ridiculus massa venenatis. Adipiscing purus, adipiscing viverra feugiat et. Sagittis, facilisis dui faucibus ipsum nulla rutrum."
            },
          ].map(({title, description}) => {
            return (
                <div className="text-center w-1/4 space-y-5" key={title}>
                  <div className="bg-gray-600 w-20 h-20 mx-auto rounded-full flex-col flex justify-center">
                    <i className="uil uil-star text-5xl text-gray-400 mb-1.5"/>
                  </div>
                  <div className="text-2xl font-bold font-mono">{title}</div>
                  <div className="text-base text-gray-400">{description}</div>
                  <div className="flex justify-center text-blue-400 cursor-pointer hover:underline">
                    <span className="text-base font-bold">Learn More</span>
                    <i className="uis uis-arrow-circle-right text-lg ml-2"/>
                  </div>
                </div>)
          })
          }
        </div>
        <div className="px-96 py-28 bg-white text-center relative">
          <div className="absolute left-56 top-1/2 transform -translate-y-1/2">
            <div
                className="bg-gray-600 hover:bg-gray-500 shadow-md w-16 h-16 mx-auto rounded-full flex-col flex justify-center cursor-pointer">
              <i className="uil uil-angle-left text-4xl text-gray-400"/>
            </div>
          </div>
          <div className="absolute right-56 top-1/2 transform -translate-y-1/2">
            <div
                className="bg-gray-600 hover:bg-gray-500 shadow-md w-16 h-16 mx-auto rounded-full flex-col flex justify-center cursor-pointer">
              <i className="uil uil-angle-right text-4xl text-gray-400 "/>
            </div>
          </div>
          <div className="text-5xl font-bold">Testimonials</div>
          <div className="mt-10">
            <Star num="3"/>
            <div className="text-2xl mt-5">Etiam mollis condimentum erat in mollis. Suspendisse arcu lectus,pellentesque
              ut tempor et, pharetra a
              sem. Duis gravida varius diam. Fusce suscipit mauris vitae volutpat porta.Sed elementum, diam vitae
              ullamcorper feugiat, tortor ipsum tristique turpis, eu pulvinar ante nibh vestibulum ex. Fusce malesuada
              imperdiet interdum. Fusce augue purus, feugiat et maximus non, scelerisque nec felis. Nulla ut cursus
              elit, vitae faucibus orci.
            </div>
          </div>
          <div className="mt-10">
            <div className="font-bold text-2xl">Ethan Greene</div>
            <div className="text-xl mt-2">London, UK</div>
          </div>
        </div>
      </div>

  );
}
