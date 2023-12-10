type IconProps = {
  className?: string;
};

export default function ShirtIcon({ className }: IconProps ) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-shirt ${className}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6b7280" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
    </svg>
  )
}
