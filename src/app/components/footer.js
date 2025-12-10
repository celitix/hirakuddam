import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Hirakud Dam Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-cyan-600">Hirakud Dam</div></Link>
          <p className="text-gray-300 text-lg">
            Enjoy panoramic water views and explore the impressive structure of Odisha’s magnificent Hirakud Dam.Witness a breathtaking engineering marvel stretching across the mighty Mahanadi River.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/all-about-hirakud-dam" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
              All about Hirakud Dam
              </p>
            </Link>

            <Link href="/blog/hirakud-dam-mystery-of-constuction" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
           Hirakud dam – Mystery of Constuction
              </p>
            </Link>

            <Link href="/blog/dam-in-odisha" className="flex items-center gap-3 group">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
                Dam in Odisha
              </p>
            </Link>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-cyan-500 transition">Home</Link></li>
            <li><Link href="/hirakud-dam-insights" className="hover:text-cyan-500 transition">Dam Insights</Link></li>
            <li><Link href="/places-to-go" className="hover:text-cyan-500 transition">Places to go</Link></li>
            <li><Link href="/how-to-get-there" className="hover:text-cyan-500 transition">How to reach</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4157062830072!2d83.86588147156273!3d21.53059472672138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213c9501855187%3A0xa33fc6e2b3eb443b!2sHirakud%20Dam%2C%20Odisha%20768016%2C%20India!5e0!3m2!1sen!2sus!4v1762431448713!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
