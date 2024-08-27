import Image from "next/image";

export default function Benefits() {
  return (
    <section className="bg-gradient-to-r  from-gd-blue to-gd-gray text-white">
      <div className="max-w-screen-2lg mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-10">Beneficios</h2>
        <ul className="flex flex-col gap-7 md:flex-row">
          <li className="md:basis-1/3">
            <Image src="/location-icon.png" alt="geoposicion" width="36" height="44" className="mx-auto" />
            <h3 className="lg:text-2xl text-green-basto font-bold text-center mb-2">Geoposición</h3>
            <p className="lg:text-base font-bold text-sm text-center mb-2">
              Ubicación e identificación del ganado en tiempo real:
            </p>
            <ul className="list-disc text-sm">
              <li>Ahorra tiempos en la localización y el arreo del ganado</li>
              <li>Control del manejo de hacienda</li>
              <li>Conteo diario de animales</li>
              <li>Prevención del robo de ganado</li>
              <li>Protección del capital</li>
              <li>Aporta trazabilidad a la cadena productiva</li>
            </ul>
          </li>
          <li className="md:basis-1/3">
            <Image src="/cow-icon.png" alt="pastore0" width="42" height="40" className="mx-auto mb-2" />
            <h3 className="lg:text-2xl text-green-basto font-bold text-center mb-2">Pastoreo</h3>
            <p className="lg:text-base font-bold text-sm text-center mb-2">
              Monitoreo de patrones de Comportamiento en la Alimentación:
            </p>
            <ul className="list-disc text-sm">
              <li>
                Alteraciones del ciclo de pastoreo: ej, cambios en los tiempos o patrones asociados a cada actividad
                Pastoreo-Bebida-Rumia-Descanso, son relacionadas a menor oferta o baja calidad forrajera.
              </li>
              <li>
                A través de las distancias recorridas, se puede obtener información de gasto calórico y si esta cumple o
                no con los requerimientos diarios.
              </li>
            </ul>
          </li>
          <li className="md:basis-1/3">
            <Image src="/health-icon.png" alt="salud" width="38" height="38" className="mx-auto mb-2" />
            <h3 className="lg:text-2xl text-green-basto font-bold text-center mb-2">Salud</h3>
            <p className="lg:text-base font-bold text-sm text-center mb-2">
              Gestiona de forma proactiva la salud animal a través de alertas:
            </p>
            <ul className="list-disc text-sm">
              <li>
                Monitoreo de T° 24/7: Cuesta mucho dinero perder una cría durante el parto o no tratar animales
                enfermos.
              </li>
              <li>
                Monitoreo control ITH: El estrés calórico, afecta de manera directa la eficiencia y la producción.
              </li>
              <li>Disminución Índices reproductivos Vacas y Toros.</li>
              <li>Disminución en la ganancia de peso.</li>
              <li>Bajo condiciones extremas puede llegar a producirse la muerte de los animales.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
