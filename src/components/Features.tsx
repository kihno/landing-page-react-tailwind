const Features = () => {
  return (
    <section className="container mx-auto bg-white dark:bg-gray-900 dark:border-2 dark:rounded-3xl py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className=" text-lg font-semibold leading-8 text-amber-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need in one place
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className=" grid grid-cols-1 gap-7-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white sm:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path></svg>
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-800 dark:text-white">Minimum Investment</p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-white">Cactus costs very little to get started</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white sm:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-800 dark:text-white">Steady Growth</p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-white">Watch your Cactus grow a little each year</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white sm:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"></path></svg>
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-800 dark:text-white">Wireless Operation</p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-white">Minimum power consumption makes Cactus great for the environment</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white sm:shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"></path></svg>
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-800 dark:text-white">Security First</p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-white">With multiple layers of protection to keep intruders at bay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
