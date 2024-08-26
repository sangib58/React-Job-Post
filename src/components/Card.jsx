const Card = ({children,bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} rounded-lg shadow-sm p-6`}>
        {children}
    </div>
  )
}

export default Card