
function Login() {
return (
  <main>
    <div className="bg-white rounded-md h-full lg:ml-16 xl:ml-16 mx-1 justify-center overflow-hidden">
      <h1 className="text-xl font-medium text-center pt-6">
        Create Your Free Account
      </h1>
      <div className="mt-5 mx-7">
        <button
          type="button"
          className="font-medium border-2 border-gray-400 hover:border-[#3b5998] text-slate-900 hover:bg-gray-300 rounded-sm text-lg text-center items-center mr-1 w-24 xl:w-32 lg:32 h-10"
        >
          <span className="font-bold text-[#3b5998] text-lg mr-1">f</span>
          Facebook
        </button>
        <button
          type="button"
          className="font-medium text-slate-900 border-2 border-gray-400 hover:border-orange-500 hover:bg-gray-300 rounded-sm text-lg text-center items-center mr-1 w-24 xl:w-32 lg:32 h-10"
        >
          <span className="font-bold text-orange-500 text-lg mr-1">G</span>
          Google
        </button>
        <button
          type="button"
          className="font-medium text-slate-900 border-2 border-gray-400 hover:border-[#3b5998] hover:bg-gray-300 rounded-sm text-lg text-center items-center w-24 xl:w-32 lg:32 h-10"
        >
          <span className="font-bold text-[#3b5998] text-lg mr-1">in</span>
          LinkedIn
        </button>
      </div>
      <form className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-400 hover:bg-green-300 text-slate-900 font-bold py-3 px-3 w-full rounded-sm"
            type="submit"
          >
            Start Learning for Free
          </button>
        </div>
      </form>
      <div>
        <p className="text-gray-500 pb-4 text-sm text-center xl:text-left lg:text-left mx-5 xl:ml-7 lg:ml-7">
          By continuing, you accept our Terms of Use, our Privacy Policy and
          that your data is stored in the USA.
        </p>
      </div>
    </div>
  </main>
);
};
export default Login