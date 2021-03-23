import Image from "next/image";

export default function ContactPage() {
  return (
      <div className="flex mx-auto px-36 py-28 h-auto justify-center">
        <div className="relative flex justify-center text-left mr-16">
          <Image
              className="rounded-2xl"
              src="/map.png"
              width={650}
              height={400}
              priority
              alt="map">
          </Image>
          <div
              className="bg-white h-auto w-auto absolute z-10 bottom-0 rounded-xl flex justify-around px-8 py-5 mb-9 text-left">
            <div className="w-64">
              <div className="cursor-default font-bold">ADDRESS</div>
              <div className="mt-1.5 text-gray-500">5810 Hackett Plain Suite 705London, UK</div>
            </div>
            <div className="w-64 flex-col">
              <div>
                <div className="cursor-default font-bold">EMAIL</div>
                <div className="mt-0.5 ">
                  <a className="hover:underline text-blue-500"
                     href="mailto:info@ventureeastafrica.com">info@ventureeastafrica.com</a>
                </div>
              </div>
              <div className="mt-2">
                <div className="font-bold cursor-default">PHONE</div>
                <div className="mt-0.5 text-gray-500">+44-123-1234</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="font-bold text-4xl">Contact Us</div>
          <div className="my-3 text-gray-500">
            Sed ultricies lorem id ex feugiat interdum.Phasellus sed dui id metus accumsan consectetur.
          </div>
          <div className="space-y-5">
            <input placeholder="Name"
                   className="flex-1 appearance-none border border-transparent w-full py-4 px-4 bg-gray-100  text-xl placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"/>
            <input placeholder="E-mail"
                   className="mt-3 flex-1 appearance-none border border-transparent w-full py-4 px-4 bg-gray-100  text-xl placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"/>
            <textarea placeholder="Message" rows="4"
                      className="resize-none mt-3 flex-1 appearance-none border border-transparent w-full py-4 px-4 bg-gray-100 text-xl placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"/>
            <button
                className="flex-shrink-0 bg-blue-500 text-gray-100 w-1/2 text-xl font-semibold py-3 px-6 rounded-lg hover:bg-blue-400 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
  );
}
