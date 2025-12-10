import Image from "next/image";
import Link from "next/link";
import React from "react";

const DamInsightsSection = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-10 text-gray-800">
    <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-18">Dam Insights</h2>

      <div className="space-y-5">
        <div>
          <h3 className="italic font-semibold">Hirakud Dam Insights</h3>
          <p className="mt-2 text-justify leading-relaxed">
            India’s longest dam is Hirakud Dam. Constructed on{" "}
            <Link href="https://en.wikipedia.org/wiki/Mahanadi" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer hover:text-blue-700 font-semibold transition">
              Mahanadi River </Link>
            this is situated in Indian state Odisha. Amongst the Dams of India
            this definitely holds a unique position. Hirakud dam is situated
            near Sambalpur District of Odisha. 15 kilometres from Sambalpur this
            is a milestone after Independence of the country. This is a historic
            Dam. Controlling the Mahanadi River was important. For the Mahanadi
            delta was under devastating effects of flood. There is an existent
            lake behind the dam.
          </p>
        </div>

        <div>
          <h3 className="italic font-semibold">The specialities</h3>
          <p className="mt-2 text-justify leading-relaxed">
            The Hirakud dam is more than a dam. It’s a matter of pride all
            together. After the Independence of India this was the first River
            valley project. It was a huge project. It is a landmark project that
            made the country proud. As a country that just got freedom, this
            project was a crowning project. It made India self-reliant. The free
            India as a country was still a child and such decisions made the
            country stronger.
          </p>
        </div>

        <div>
          <h3 className="italic font-semibold">What are dams?</h3>
          <p className="mt-2 text-justify leading-relaxed">
            This dam is elevated at 160 metres. Dams are huge constructed
            barriers that are made on water bodies. The purpose of making dams
            is to reserve water for various purposes. The flowing water of the
            river is of no use until it is being reserved. Hence dams restrict
            the water of the river from flowing and store it for multiple usages.
            The dams are constructed on rivers also to avoid flood like
            situations.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>The Dams of India have proved to be a boon for the entire nation.</li>
            <li>Since India is known as the land of rivers Dams become the life line.</li>
            <li>There are ample of river water available for the residents of the country.</li>
            <li>Hence it was wise on the part of the authorities to construct Dams on the rivers.</li>
          </ul>

          <p className="mt-3 text-justify leading-relaxed">
            The beautiful Dam is built 15 km north to the Sambalpur district.
            The Hirakud Dam is a complex structure that has been built across the
            River Mahanadi. The purpose of making this massive Dam was to store
            water for{" "}
            <Link href="https://en.wikipedia.org/wiki/Irrigation" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer hover:text-blue-700 font-semibold transition">
              irrigation </Link>
            purposes and also to avoid floods.
          </p>
        </div>
      </div>

      {/* Image Row */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group">
    <Image
      src="/assets/insight1.jpg"
      alt="Hirakud Dam view"
      fill
      className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>
  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group">
    <Image
      src="/assets/insight2.jpg"
      alt="Dam construction site"
      fill
      className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>
</div>

      <p className="mt-6 text-justify leading-relaxed">
        The Dam stretches over 743 sq. km. Considering the area covered this is
        one of the biggest artificial lakes in Asia. From the tourist point of
        view this dam provides good 21 km long stretch along the{" "}
        <Link href="https://en.wikipedia.org/wiki/Dyke" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold hover:text-blue-700">dykes</Link>.
        The length is ideal for a long drive. People can actually feel the larger
        than life structure. The massive and immensely beautiful water of the Dam
        takes your heart to the magic of water. Hydroelectricity is also generated
        with this project. The rainy season is breath-taking as the flow of water
        from the gates of the dam is powerful and electrifying. The best time to
        visit the Dams of India is Monsoon. Most of the rivers are rain-fed in
        the country and hence the collection of water is highest at this season.
        When the gates of the dam are open it takes your heart away.
      </p>
    </div>
    </section>
  );
};

export default DamInsightsSection;
