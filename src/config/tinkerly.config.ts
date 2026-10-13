/** Contenido principal de Tinkerly. Completa los canales antes de publicar. */
export const tinkerlyConfig = {
  name: 'Tinkerly',
  tagline: 'Papelería creativa por encargo',
  description: 'Papelería creativa personalizada. Explora ideas de stickers, tarjetas y detalles para tus momentos especiales. Cada pedido se cotiza según disponibilidad.',
  navigation: [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Ideas', href: '/#ideas' },
    { label: 'Cómo pedir', href: '/#como-pedir' },
    { label: 'Sobre Tinkerly', href: '/#sobre-tinkerly' },
    { label: 'Preguntas', href: '/#preguntas' },
  ],
  whatsappNumber: '', // Ejemplo: 50588888888. Sin + ni espacios.
  whatsappMessage: '¡Hola, Tinkerly! Me gustaría consultar un pedido personalizado.',
  instagramUrl: '', // https://instagram.com/... (si aplica)
  /** Referencias visuales; NO es un catálogo con productos confirmados ni stock. */
  ideas: [
    { id: 'stickers', title: 'Stickers y etiquetas', caption: 'Para organizar, decorar y personalizar.', image: '/images/stickers.webp', alt: 'Imagen conceptual de hojas de stickers y etiquetas en tonos rosados.' },
    { id: 'tarjetas', title: 'Tarjetas y tags', caption: 'Pequeños mensajes para grandes ocasiones.', image: '/images/cards.webp', alt: 'Imagen conceptual de tarjetas, sobres y etiquetas para regalos.' },
    { id: 'detalles', title: 'Detalles para celebrar', caption: 'Ideas creativas para regalar y compartir.', image: '/images/details.webp', alt: 'Imagen conceptual de detalles decorativos para regalos y celebraciones.' },
  ],
  faqs: [
    { question: '¿Los productos están disponibles para entrega inmediata?', answer: 'No. Trabajamos exclusivamente bajo pedido. Antes de confirmarlo revisamos el diseño, los materiales y nuestra disponibilidad.' },
    { question: '¿Cuánto tarda la elaboración?', answer: 'Depende del producto y la cantidad. Trabajamos principalmente por las noches y los fines de semana, por lo que confirmamos la fecha de entrega de cada solicitud antes de aceptar el pedido.' },
    { question: '¿Puedo pedir algo que no aparece en la página?', answer: '¡Sí! Puedes compartir tu idea o una referencia. Revisaremos si podemos realizarla con los materiales y equipos disponibles.' },
    { question: '¿Cómo conozco el precio?', answer: 'Cada trabajo se cotiza según cantidad, materiales, tamaño, diseño y tiempo de elaboración. No se considera confirmado hasta acordar esos detalles contigo.' },
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const phone = tinkerlyConfig.whatsappNumber.trim().replace(/[^\d]/g, '');
  if (!phone) return null;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message ?? tinkerlyConfig.whatsappMessage)}`;
}
