import Image from 'next/image';

export default function Screenshot({ src, alt, caption }) {
  return (
    <figure className="screenshot-figure">
      <div className="screenshot-wrapper">
        <Image 
          src={src} 
          alt={alt}
          width={800}
          height={450}
          className="screenshot-image"
          unoptimized
        />
      </div>
      {caption && <figcaption className="screenshot-caption">{caption}</figcaption>}
    </figure>
  );
}
