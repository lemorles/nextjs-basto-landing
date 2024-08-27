import Image from "next/image";

export default function Monitoring() {
  return (
    <section className="max-w-screen-2lg mx-auto px-5 pb-5 flex flex-col md:flex-row md:justify-between items-center">
      <div className="md:basis-11/12">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gd-gray mb-5">Monitoreo de pastoreo</h2>
        <p className="md:text-base xl:text-lg md:max-w-screen-sm">
          El monitoreo de Bastó contribuye a aumentar significativamente los índices de producción y el bienestar
          animal. <br /> A través de nuestras caravanas inteligentes se obtienen datos que son procesados en nuestra
          plataforma, obteniendo información de geolocalización del rodeo, patrones de comportamiento en pastoreo,
          indicadores de salud y bienestar animal. Aportamos trazabilidad, generando valor a la cadena de producción.
        </p>
        <button type="button" className="md:text-base bg-green-basto text-sm text-white px-4 py-3 rounded-lg mt-4">
          Más información
        </button>
      </div>
      <Image src="/cow-location.webp" alt="monitoreo" width="493" height="624" className="mt-8" />
    </section>
  );
}
