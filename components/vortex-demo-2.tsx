import { Vortex } from "./vortex";


export default function VortexDemoSecond() {
  return (
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={20} // orange hue
        baseRadius={1.5}
        rangeRadius={1.5}
        sphereRadius={6000}
        minSeparationAngle={0.14}
        palette={["#ff6b35", "#ffffff", "#ff8c5a", "#ffa07a"]} // Orange shades and white
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      />
  )
}
