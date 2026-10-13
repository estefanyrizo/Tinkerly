/** Contenido principal de Tinkerly. Completa los canales antes de publicar. */
export const tinkerlyConfig = {
  name: 'Tinkerly',
  tagline: 'Papelería creativa personalizada en Managua, Nicaragua',
  description: 'Papelería creativa personalizada en Managua, Nicaragua: stickers, tarjetas, etiquetas y detalles por encargo. Descubre Tinkerly y consulta tu pedido.',
  navigation: [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Ideas', href: '/#ideas' },
    { label: 'Cómo pedir', href: '/#como-pedir' },
    { label: 'Sobre Tinkerly', href: '/#sobre-tinkerly' },
    { label: 'Preguntas', href: '/#preguntas' },
  ],
  whatsappNumber: '50583621351', // Nicaragua; número público para consultas por WhatsApp.
  whatsappMessage: '¡Hola, Tinkerly! Me gustaría consultar un pedido personalizado.',
  instagramUrl: 'https://www.instagram.com/tinkerly.ni',
  /** Referencias visuales; NO es un catálogo con productos confirmados ni stock. */
  ideas: [
    { id: 'stickers', title: 'Stickers y etiquetas', caption: 'Para organizar, decorar y personalizar.', image: '/images/stickers.webp', alt: 'Imagen conceptual de hojas de stickers y etiquetas en tonos rosados.' },
    { id: 'tarjetas', title: 'Tarjetas y tags', caption: 'Pequeños mensajes para grandes ocasiones.', image: '/images/cards.webp', alt: 'Imagen conceptual de tarjetas, sobres y etiquetas para regalos.' },
    { id: 'detalles', title: 'Detalles para celebrar', caption: 'Ideas creativas para regalar y compartir.', image: '/images/details.webp', alt: 'Imagen conceptual de detalles decorativos para regalos y celebraciones.' },
  ],
  faqs: [
    { question: '¿Los productos están disponibles para entrega inmediata?', answer: 'Nuestros productos se elaboran por encargo. Si necesitas algo para una fecha especial, consúltanos con anticipación.' },
    { question: '¿Cuánto tarda la elaboración?', answer: 'Depende del producto, la cantidad y la personalización. Te confirmaremos una fecha de entrega antes de comenzar.' },
    { question: '¿Puedo pedir algo que no aparece en la página?', answer: '¡Sí! Cuéntanos tu idea y envíanos una referencia, si tienes. Te compartiremos las opciones disponibles.' },
    { question: '¿Cómo conozco el precio?', answer: 'Envíanos el producto que te interesa, la cantidad y los detalles de personalización. Te enviaremos una cotización antes de confirmar.' },
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const phone = tinkerlyConfig.whatsappNumber.trim().replace(/[^\d]/g, '');
  if (!phone) return null;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message ?? tinkerlyConfig.whatsappMessage)}`;
}
