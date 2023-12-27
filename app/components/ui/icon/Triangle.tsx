type IconProps = {
    className?: string;
};
  
export function TriangleIcon({ className }: IconProps ) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-triangle-inverted-filled ${className}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z" strokeWidth="0" fill="currentColor" />
    </svg>
  )
}