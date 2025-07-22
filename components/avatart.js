export function Avatar({ src, alt, className = "w-10 h-10 rounded-full" }) {
  return <img src={src} alt={alt} className={className} />;
}