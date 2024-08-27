import Image from "next/image";
import Header from "./header";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r  from-gd-blue to-gd-gray md:h-screen">
      <div className="bg-[url('/bg-cow.webp')] bg-cover bg-left md:bg-contain bg-no-repeat md:bg-right py-5 px-5 md:h-screen">
        <Header />

        <div className="max-w-screen-2lg mx-auto">
          <h1 className="lg:text-5xl md:max-w-3xl sm:text-4xl sm:mt-7 text-3xl text-white">
            Regenerar los suelos del mundo, <span className="font-bold">transformando la producción ganadera</span>
          </h1>
          <p className="lg:text-3xl md:max-w-xl sm:text-2xl sm:mt-5 text-xl font-bold text-green-basto mt-3">
            Aumenta la eficiencia, rentabilidad y sustentabilidad de la producción ganadera
          </p>
          <Image src="/cita.webp" alt="premios cita" width="150" height="106" className="sm:mx-0 mx-auto my-6" />
          <button
            type="button"
            className="sm:w-auto lg:text-base w-full  bg-green-basto text-sm text-white px-4 py-3 rounded-lg mb-7"
          >
            Contratá nuestro servicio
          </button>
        </div>
      </div>
    </section>
  );
}
