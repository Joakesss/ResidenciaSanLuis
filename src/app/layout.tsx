import type { Metadata } from "next";
import { contenido } from "@/content/residencia";
import Nav from "@/components/Nav";
import BotonWhatsapp from "@/components/BotonWhatsapp";
import "./globals.css";

const { sitio, contacto } = contenido;

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: `${sitio.nombre} — ${sitio.tagline}`,
    template: `%s | ${sitio.nombre}`,
  },
  description: sitio.descripcion,
  keywords: [
    "Residencia SL",
    "residencia adultos San Luis",
    "coliving San Luis",
    "gimnasia terapeutica San Luis",
    "alquiler adultos independientes San Luis",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: sitio.url,
    siteName: sitio.nombre,
    title: `${sitio.nombre} — ${sitio.tagline}`,
    description: sitio.descripcion,
    images: [{ url: "/img/og-image.png", width: 1200, height: 800, alt: sitio.nombre }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: sitio.nombre,
  description: sitio.descripcion,
  url: sitio.url,
  telephone: `+549${contacto.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Estado de Israel 2185",
    addressLocality: "San Luis",
    addressRegion: "San Luis",
    addressCountry: "AR",
  },
  amenityFeature: contenido.servicios
    .filter((s) => s.incluido === "si")
    .map((s) => ({
      "@type": "LocationFeatureSpecification",
      name: s.nombre,
      value: true,
    })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-3 focus:rounded focus:bg-verde-fuerte focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Nav />
        {children}
        <BotonWhatsapp />
      </body>
    </html>
  );
}
