type IconProps = {
    className?: string;
    fill?: string;
};

export default function SquareIcon({ className, fill = "currentColor" }: IconProps ) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-square-filled ${className}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" strokeWidth="0" fill={fill} />
    </svg>
  )
}