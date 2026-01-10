import RotatingWords from "../Test/wordAnimation"
import { LabCard } from "./lab-card"

type Item = {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  href?: string
}

type LabSectionProps = {
  headingLeft?: string
  paragraphRight?: string
  items?: Item[]
}

export default function LabSection({
  headingLeft = "DOMAIN",
  // paragraphRight = "Step into our creative÷ playground - where relentless curiosity fuels original ideas and unforgettable formats. Every IP carries our signature spark: bold, unexpected, and unmistakably Tessarakt.",
  items = [
    {
      id: "1",
      title: "Cultural Events",
      description:
        "Celebrate creativity and tradition with vibrant cultural performances. From classical dance to modern expressions, battle of bands to fashion shows, this domain showcases the artistic spirit and cultural diversity of our community.",
      imageUrl: "/sections/cultural.png",
      imageAlt: "Cultural performances with dance and music.",
      href: "/cultural",
    },
    {
      id: "2",
      title: "Sports Championship",
      description:
        "Compete in thrilling athletic competitions that test strength, strategy, and teamwork. From cricket tournaments to basketball battles, football championships to athletics meets, bring your A-game and claim victory.",
      imageUrl: "/sections/sports.png",
      imageAlt: "Sports competitions and athletic events.",
      href: "/sports",
    },
    {
      id: "3",
      title: "Technical Innovation",
      description:
        "Push the boundaries of technology and innovation. Participate in hackathons, robo wars, coding competitions, and tech quizzes that challenge your technical prowess and problem-solving abilities.",
      imageUrl: "/sections/technical.png",
      imageAlt: "Technical competitions and innovations.",
      href: "/technical",
    },
    {
      id: "4",
      title: "Media & Arts",
      description:
        "Express your creativity through visual storytelling and digital media. Showcase your skills in photography, short films, podcasting, and content creation in this dynamic domain of modern expression.",
      imageUrl: "/sections/media.png",
      imageAlt: "Media and content creation events.",
      href: "/media",
    },
  ],
}: LabSectionProps) {
  return (
    <section id="domains" className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="mx-auto w-full py-16 md:py-24 relative z-10">
        {/* Top: massive LAB + paragraph */}
        <div className="grid grid-cols-1 w-full pl-4 md:pl-6 lg:pl-10 md:grid-cols-12 items-start gap-8 md:gap-10">
          <div className="md:col-span-6">
            <h2 className="font-new-amsterdam uppercase leading-none tracking-widest text-[14vw] md:text-[10vw] lg:text-[8vw] text-[#ff6b35] drop-shadow-[0_0_40px_rgba(255,107,53,0.5)]">
              {headingLeft}
            </h2>
          </div>
          <div className="md:col-span-2" />
          <div className="md:col-span-4 bg-[#ff6b35] p-4 flex gap-3 items-center justify-between rounded-lg border-2 border-white transform hover:scale-105 transition-all duration-300">
           <div className="w-3 h-3 rounded-full bg-black animate-pulse"/>
           <RotatingWords />
           <div className="w-3 h-3 rounded-full bg-black animate-pulse"/>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-16 px-4 md:px-6 lg:px-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <li key={item.id} className="list-none">
                <LabCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  href={item.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
