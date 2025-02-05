export default function AboutStats () {
return (

<>
<div className="bg-[#fff] h-auto text-black" >
<div className="max-w-sm md:max-w-7xl mx-auto container pt-32 pb-16">

{/* stats container */}
<div className="md:flex gap-4">

{/* stats cards */}
<div className=" w-[320px] h-[122px] md:border-l flex flex-col items-center md:justify-center text-black space-y-2  border-gray-300 border-solid p-4">
    <h2 className="text-3xl text-black font-[500px]">
    2,400+
    </h2>
    <p className="text-gray-400">
    Employees
    </p>
</div>

<div className=" w-[320px] h-[122px] md:border-l flex flex-col items-center md:justify-center text-black space-y-2  border-gray-300 border-solid p-4">
    <h2 className="text-3xl text-black font-normal">
    7 offices
    </h2>
    <p className="text-gray-400">
    Globally
    </p>
</div>

<div className=" w-[320px] h-[122px] md:border-l flex flex-col items-center md:justify-center text-black space-y-2  border-gray-300 border-solid p-4">
    <h2 className="text-3xl text-black font-normal">
    98
    </h2>
    <p className="text-gray-400">
    Nationalities
    </p>
</div>

<div className=" w-[320px] h-[122px] md:border-l flex flex-col items-center md:justify-center text-black space-y-2  border-gray-300 border-solid p-4">
    <h2 className="text-3xl text-black font-normal">
    4
    </h2>
    <p className="text-gray-400">
    Continents
    </p>
</div>


</div>
{/* Other details */}
<div className="space-y-3 flex flex-col items-center pt-16 pb-16 ">
<h2 className="text-4xl max-w-[500px] text-center leading-normal">
Our values guide
every advancement
</h2>

<p className="text-lg max-w-[550px] text-gray-400 text-center leading-normal font-extralight">
From business strategy to employee care, every step we take follows our 4 key values.
</p>
</div>

{/* stats grid */}

<div className="border-t grid grid-cols-1 md:grid-cols-2 text-black border-gray-300 border-solid">
  {/* Cards */}
  <div className="flex flex-col justify-center border-b border-r border-gray-300 border-solid p-4 space-y-2">
    <h3 className="text-xl font-semibold">Bold</h3>
    <p>
      We have innovated, pushed boundaries, and challenged the status quo from day one. We follow a simple idea: if it doesn’t exist, we invent it. If it does exist, we improve it.
    </p>
  </div>

  <div className="flex flex-col justify-center border-b border-gray-300 border-solid p-4 space-y-2">
    <h3 className="text-xl font-semibold">Good people</h3>
    <p>
      We prioritize our clients, making sure all our innovations are influenced by our desire to give them the best trading experience possible.
    </p>
  </div>

  <div className="flex flex-col justify-center border-b border-r border-gray-300 border-solid p-4 space-y-2">
    <h3 className="text-xl font-semibold">Tech professionals</h3>
    <p>
      We are science-driven, using sophisticated models and data in everything we do to keep our clients protected and offer them better-than-market conditions.
    </p>
  </div>

  <div className="flex flex-col justify-center border-b border-gray-300 border-solid p-4 space-y-2">
    <h3 className="text-xl font-semibold">Reliable</h3>
    <p>
      We prioritize reliability in our platform, giving us a solid foundation on which to innovate. Stable spreads, fast execution, and other client-centered benefits make trading with Exness more dependable.
    </p>
  </div>
</div>


<div>

</div>
</div>
</div> 
</>

)
}