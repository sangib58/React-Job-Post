import ClipLoader from "react-spinners/ClipLoader"

const override={
    display:'block',
    margin:'100px auto'
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
    loading={loading}
    size={150}
    cssOverride={override}
    color="#4338ca"
    />
  )
}

export default Spinner