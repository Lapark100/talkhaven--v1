export default function AboutUsHero () {
    return (
        <section
          style={{
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/roman-kraft-0EVKn3-5JSU-unsplash.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
          className="m-0 p-0 h-[600px] md:h-[600px] flex justify-center items-center mt-20"
        >
          <div className="max-w-sm md:max-w-7xl mx-auto w-full">
            <div className="w-full flex flex-col text-left md:items-start md:w-1/2">
              {/* Content Here */}
              <h1 className="text-4xl text-center md:text-left md:text-[56px] font-semibold text-white">This is Talk Haven</h1>
              <p className=" pt-2 md:pt-4 text-center md:text-left md:text-lg text-gray-200">
                Your trusted platform for compassionate and confidential online therapy.
                Connecting you to licensed therapists anytime, anywhere.
              </p>
            </div>
          </div>
        </section>
      );
    }
    
