import HeroSection from "./components/hero";
import Link from "next/link";

export default function Home() {
  return (
  <>
  {/*=== Hero section ===*/}
  <HeroSection />

  {/*=== Mid section ===*/}
   <section className="px-4 md:px-16 lg:px-32 py-10 text-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Hirakud Dam Sambalpur
      </h2>
      <p className="text-justify leading-relaxed text-sm md:text-base mx-auto max-w-5xl">
        India’s longest dam is Hirakud Dam. Constructed on Mahanadi River
        this is situated in Indian state Odisha. Amongst the Dams of India this
        definitely holds a unique position. Hirakud dam is situated near
        Sambalpur District of Odisha. 15 kilometres from Sambalpur this is a
        milestone after Independence Of the country. This is a historic Dam.
        Controlling the Mahanadi River was important. For the Mahanadi delta was
        under devastating effects of flood. There is an existent lake behind the
        dam. The flowing water of the river is of no use until it is being
        reserved. Hence dams restrict the water of the river from flowing and
        store it for multiple usages. The dams are constructed on rivers also to
        avoid flood like situations. The Hirakud dam is more than a dam. It’s a
        matter of pride all together. After the Independence of India this was
        the first River valley project. It was a huge project. It is a landmark
        project that made the country proud. As a country that just got freedom,
        this project was a crowning project. It made India self-reliant. The
        free India as a country was still a child and such decisions made the
        country stronger. The Dam stretches over 743 sq. km. considering the
        area covered this is one of the biggest artificial lakes in Asia. So
        from the tourist point of view this dam provides good 21 km long stretch
        along the dykes.The length is ideal for a long drive. People can actually feel the
        larger than life structure. The massive and immensely beautiful water of
        the Dam takes your heart to the magic of water. Hydroelectricity is also
        generated with this project. The rainy season is breath taking as the
        flow of water from the gates of the dam is powerful and electrifying.
        <Link
          href="/hirakud-dam-insights"
          className="text-blue-600 hover:text-blue-700 transition cursor-pointer font-semibold"
        >
          Read More..
        </Link>
      </p>
    </section>
  </>
  );
}
