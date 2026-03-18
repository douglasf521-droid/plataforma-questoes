// Galeria de imagens para usar em todo o site
export const images = {
  // Banners
  bannerPrincipal: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=300&fit=crop',
  bannerEstudos: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=300&fit=crop',
  bannerEducacao: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=300&fit=crop',
  
  // Ícones e ilustrações
  livro: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop',
  cerebro: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
  computador: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  laptop: 'https://images.unsplash.com/photo-1547394765-185342c1f120?w=400&h=300&fit=crop',
  
  // Backgrounds
  bgGradient1: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1080&fit=crop',
  bgGradient2: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop',
};

// Componente de imagem com fallback
export function OptimizedImage({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string
  alt: string
  className?: string 
}) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={`${className} object-cover`}
      loading="lazy"
      onError={(e) => {
        // Fallback se a imagem falhar
        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(alt);
      }}
    />
  )
}
