const Header = () => {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a className="flex items-center text-gray-900 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Cactus
          </a>
          <div className="flex w-1/2 justify-end">
            <div>
              <button type="button" className="intline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 eas-in-out">
                Try It Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
