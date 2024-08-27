export default function Contact() {
  return (
    <section className="max-w-screen-2lg mx-auto px-5 pb-8 flex flex-col lg:flex-row gap-4">
      <div className="md:basis-1/2">
        <h2 className="md:text-3xl lg:text-4xl text-2xl text-green-basto font-bold mb-4">
          ¿Querés recibir información para una próxima pre venta del servicio de monitoreo?
        </h2>
        <ul className="ml-5 md:text-base list-disc text-sm mb-7">
          <li>Geoposición</li>
          <li>Conteo de Ganado</li>
          <li>Comportamiento en pastoreo</li>
          <li>Bienestar</li>
          <li>Salud</li>
          <li>Estado de pasturas</li>
        </ul>
      </div>
      <form className="text-sm md:basis-1/2">
        <h3 className="md:text-3xl lg:text-4xl mb-5 text-2xl font-bold text-gd-gray">¡Dejanos tus datos!</h3>
        <label htmlFor="fullname" className="block text-gray-700 mb-1">
          Nombre y apellido
        </label>
        <input
          type="text"
          id="fullname"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="email" className="block text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="location" className="block text-gray-700 mb-1">
          Localidad
        </label>
        <input
          type="text"
          id="location"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="phone" className="block text-gray-700 mb-1">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="headsCattle" className="block text-gray-700 mb-1">
          Cabezas de ganado
        </label>
        <input
          type="number"
          id="headsCattle"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="hectares" className="block text-gray-700 mb-1">
          Cantidad de hectáreas
        </label>
        <input
          type="number"
          id="hectares"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          name=""
          id="message"
          className="shadow  border rounded w-full py-2 px-3 mb-4 bg-slate-100 text-black border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="button" className="bg-green-basto text-sm text-white px-4 rounded-lg h-10">
          Enviar
        </button>
      </form>
    </section>
  );
}
