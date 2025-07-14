interface GoogleMapProps {
  className?: string
}

export function GoogleMap({ className }: GoogleMapProps) {
  return (
    <div className={className}>
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6505890165654!2d29.1213!3d40.9923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzMyLjMiTiAyOcKwMDcnMTYuNyJF!5e0!3m2!1str!2str!4v1650000000000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
} 