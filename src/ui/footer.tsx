import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-5 py-5 bg-footer">
      <Image src="/logo-blue.png" alt="logo" width="111" height="44" className="mx-auto mb-4" />
      <p className="text-xs text-center">2024 IOT ANIMALS S.A.S. Todos los derechos reservados.</p>
      <p className="text-xs text-center">Pedernera 26, planta alta, Río Cuarto, Cba, Argentina</p>
      <p className="text-xs text-center">ventas@basto.io</p>
    </footer>
  );
}
