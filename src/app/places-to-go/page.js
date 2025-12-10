import Image from "next/image";
import Link from "next/link";

const PlacesToGoSection = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-10 text-gray-800">
     <div className="max-w-5xl mx-auto">
       <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-18">Places to Go</h2>

      {/* Orissa Tourism Section */}
      <div className="space-y-5">
        <div>
          <h3 className="italic font-semibold">
            Hirakud can start your Orissa tourism
          </h3>
          <p className="mt-2 text-justify leading-relaxed">
            Orissa tourism refers to the travel and tourism plans across the state of Orissa.
            Visiting{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
              Hirakud dam </Link>
            is a must while you are at Orissa. The dam is the longest dam in the
            country. It was the first river valley project undertaken by the
            Independent India. The{" "}
            <span className="font-semibold">Indian Independence movement</span>{" "}
            was a phenomenal struggle. Over the years patriotism kept pounding
            and finally the British’s let India free. Hirakud is the largest
            manmade earthen dam. It is crowned as the longest dam. A massive
            area of 746 Km is covered by the Hirakud dam project.
          </p>
        </div>

        {/* Not just a dam */}
        <div>
          <h3 className="italic font-semibold">Not just a dam</h3>
          <p className="mt-2 text-justify leading-relaxed">
            Hirakud is not just a dam. It is a project that took care of various
            aspects of life. The purposes of building this dam were many. The
            prime focus of the project was saving the delta from Mahanadi’s
            devastating floods.{" "}
            <Link href="https://en.wikipedia.org/wiki/Mahanadi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
              Mahanadi </Link>
            literally means ‘the great river’. Very aptly named, this river is
            spread over the east central India. Since the dam has been operated
            it has served many aspects of human life. It is no doubt a
            sustainable project. A million thanks to the authorities who built
            this.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Saved the delta from floods.</li>
            <li>Provides employment in the area.</li>
            <li>Hydro electricity production.</li>
            <li>Enhanced Orissa tourism.</li>
            <li>Promoted fisheries in the area.</li>
            <li>Worldwide recognition to the country.</li>
            <li>Improved irrigation facilities.</li>
            <li>Lesser or no wastage of water.</li>
            <li>Huge reservoir of water.</li>
          </ul>
        </div>

        {/* Places to visit */}
        <div>
          <h3 className="italic font-semibold">Places to visit in Hirakud</h3>
          <p className="mt-2 text-justify leading-relaxed">
            <span className="font-semibold">Cattle Island</span> – 90 kms from
            Sambalpur is this wonderland called the Cattle Island. It is
            inhabited by wild cattle without human intervention. The story is
            interesting. While resetting the area for the dam, villagers left
            this part of the area, leaving their cattle behind. Over time this
            got submerged and the cattle settled on a hill top. One can reach
            this island through the river. They have developed different breeds
            of cattle and are wild in nature.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="group">
          <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/cattleisland.png"
              alt="Cattle Island"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Cattle Island</p>
        </div>

        <div className="group">
          <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/gandhiminar.png"
              alt="Gandhi Minar"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Gandhi Minar</p>
        </div>

        <div className="group">
          <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/GhanteshwariTemple.png"
              alt="Ghateshwari Temple"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Ghateshwari Temple</p>
        </div>
      </div>

      {/* Last paragraph */}
      <p className="mt-6 text-justify leading-relaxed">
        <span className="font-semibold">Gandhi minar</span> – as the name
        suggests it has been dedicated to the father of nation{" "}
        <Link href="https://en.wikipedia.org/wiki/Mahatma_Gandhi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
          Gandhi Ji
        </Link>
        . This is a pole-like structure that you can climb through stairs. This
        Minar provides a 360-degree view of the dam. Visitors claim that the
        best view can be seen on a cloudy rainy season day.
      </p>

      <p className="mt-4 text-justify leading-relaxed">
        <span className="font-semibold">Ghateshwari temple</span> – the name of
        the temple literally means lots of bells in the temple. This is a sought
        after temple in the Sambalpur area. Orissa is a land of old temples and
        the architecture is mesmerising. In the past, this area used to form
        whirlpools of various streams, however after the construction of Hirakud
        it is now safer.
      </p>
     </div>
    </section>
  );
};

export default PlacesToGoSection;
