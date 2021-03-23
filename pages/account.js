export default function AccountPage() {
  return (
      <div className="flex-1 px-4 mx-auto md:px-6 py-28 bg-gray-100">
        <div className="flex justify-center items-center ">
          <div className="w-1/3 mr-20">
            <div className="text-4xl font-bold">
              Sed ultricies lorem id ex feugiat interdum. Phasellus sed dui id metus consectetur.
            </div>
            <div className="text-xl text-gray-500 mt-5">
              Duis interdum nisi vel risus dictum ultrices.Fusce maximusvel odio nec pulvinar.
            </div>
          </div>
          <div className="h-80 w-80 bg-white rounded-xl shadow-sm px-8 py-8 space-y-5">
            <label className="font-bold">Sign Up</label>
            <div>
              <input placeholder="Email"
                     className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-gray-100 text-white placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"/>
              <input placeholder="Password" type="password"
                     className="mt-3 flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-gray-100 text-white placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"/>

            </div>
            <button
                className="flex-shrink-0 bg-blue-500 text-gray-100 w-full text-base font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 focus:outline-none">
              Submit
            </button>
            <div className="text-sm text-gray-600">
              Already have account? <a className="text-blue-500 hover:underline cursor-pointer">Log in</a>
            </div>
          </div>
        </div>
      </div>

  );
}
