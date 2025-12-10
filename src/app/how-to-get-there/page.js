import Image from "next/image";
import Link from "next/link";

export default function HowToGetThere() {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-white text-gray-800">
   <div className="max-w-5xl mx-auto">
       <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-18">
        How to get there
      </h2>

      <div className="space-y-5">
        <h3 className="italic font-semibold">Directions of Hirakud Dam</h3>
        <p>
          Hirakud is one amongst the Orissa Tourist places. The Hirakud dam is not just a dam.
          It is a legendry complex construction. The engineering and the hard work behind this
          project is well reflected. The state of <Link href="https://en.wikipedia.org/wiki/Odisha" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">Odisha</Link> is situated at the eastern part of the
          country. It is located right on the <Link href="https://en.wikipedia.org/wiki/Bay_of_Bengal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">Bay of Bengal</Link>.
          The state of Odisha is rich in its tribal culture and ancient history. Like any other old state, Odisha has many old Hindu temples.
        </p>

        <h3 className="italic font-semibold">The Indian state Odisha</h3>
        <p>
          Odisha is an eastern coast state. There are many other states that share their boundaries
          with Odisha. Odisha has a coastline of about 485 kilometres along the Bay of Bengal.
          This state has got a mention in the National anthem of the country as ‘Utkala’.  Since the state is situated on the Bay of Bengal lot of water related ecstasies are available in the state.
        </p>

        <div>
          <h3 className="italic font-semibold mb-2">Orissa Tourist Places</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sea beaches</li>
            <li>Ports</li>
            <li>Trade routes</li>
            <li>Fisheries</li>
            <li>Dams</li>
            <li>Rivers</li>
          </ul>
        </div>

        <p>
          The Hirakud dam provides a man-made natural view. One of the largest artificial lakes in
          Asia is the Hirakud. The collected water is a huge water body. The beauty of this place
          can be well imagined through the available pictures. A drive through the long dam can take
          you to a different world.
        </p>

        {/* Images */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group">
            <Image
              src="/assets/howtoget1.png"
              alt="Hirakud Dam view"
              fill
              className="object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group">
            <Image
              src="/assets/howtoget2.png"
              alt="Dam construction site"
              fill
              className="object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <p>
            Reaching Hirakud dam is easy. You just need to plan a trip and get the necessary
            information about the routes. Depending upon your origin place and mode of transport the routes are divides as follows-
          </p>

          <p className="font-semibold">By Air –</p>
          <p>
           – Bhubaneshwar (Capital of Odisha) and Raipur (Chhattisgarh) are the nearest airports. Both of them are 306 km. and 312 km. away respectively.
          </p>

          <p className="font-semibold">By Train –</p>
          <p>
            – Sambalpur Junction which is at a distance of 12.6 KM and the Hirakud railway station is 14.8 KM.
          </p>

          <p className="font-semibold">By Road –</p>
          <p>
            – the Roads that lead to the Dam are well connected. However depending upon the origin city the road way might differ.
          </p>

          <p>
            Interestingly, there is a huge influx of tourists to see the dam and hence transportation
            is not a problem. There are two roads that lead towards the Hirakud dam. One is through
            Burla — this road takes you to Jawahar minaar and Ashoka niwas side. The other road
            takes you to Gandhi minaar side.
          </p>

          <p>
            The Jawahar and Gandhi minaar (pillars) were constructed to pay homage to Pandit
            Jawaharlal Nehru and Gandhi ji. One can get on top of these minaars and enjoy the
            heart taking scenery of the dam.
          </p>

         <p>
            A tourist guide is recommended to understand the historic values that the Dam carries. One should check their travelling points and routes minutely. A drive through the dam is worth a million dollar.
         </p>

          <p>
            Sambalpur is the largest and oldest city in Odisha. It is just 15 km from the dam.
            A visit to Sambalpur is also recommended.
          </p>
        </div>
      </div>
   </div>
    </section>
  );
}
