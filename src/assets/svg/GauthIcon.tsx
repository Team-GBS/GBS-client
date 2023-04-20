interface Prop {
    color: string
  }
  
  const GauthIcon = ({ color }: Prop) => {
    return (
      <svg
        width='1.5rem'
        height='1.5rem'
        viewBox='0 0 16 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.6918 3.67241L8.19214 0V4.61379L10.601 5.95861L14.6918 3.67241Z'
          fill={color}
        />
        <path
          d='M7.93241 4.62434V0.03125L0.145264 4.44849L4.14266 6.75537L7.93241 4.62434Z'
          fill={color}
        />
        <path
          d='M0 13.4896V4.72754L4.0701 7.06545V11.162L0 13.4896Z'
          fill={color}
        />
        <path
          d='M7.94281 18.0002L0.145264 13.6657L4.25689 11.3071L7.94281 13.4382V18.0002Z'
          fill={color}
        />
        <path
          d='M8.20239 17.9897L15.9999 13.6552L11.8883 11.2966L8.20239 13.4277V17.9897Z'
          fill={color}
        />
        <path
          d='M7.94286 9.24854V12.5278L4.99414 10.8313L7.94286 9.24854Z'
          fill={color}
        />
        <path
          d='M8.14014 9.24854V12.5278L11.0889 10.8313L8.14014 9.24854Z'
          fill={color}
        />
        <path
          d='M7.64185 9.08245L4.86963 10.7169V7.479L7.64185 9.08245Z'
          fill={color}
        />
        <path
          d='M7.94286 8.9587L4.85913 7.2001L7.94286 5.54492V8.9587Z'
          fill={color}
        />
      </svg>
    )
  }
  
  export default GauthIcon;