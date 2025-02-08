export default function ContactHero () {
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
              <h1 className="text-4xl text-center md:text-left md:text-[56px] font-semibold text-white">Contacts</h1>
              <p className=" text-[20px] pt-2 md:pt-4 text-center md:text-left md:text-lg text-gray-200">
              Our dedicated support specialists speak 14 languages. Support is available 24 hours a day, 7 days a week in English, Chinese, Thai, Vietnamese, Arabic, Bengali, Hindi and Urdu.
              </p>
              
            </div>
          </div>
        </section>
      );
    }
    
