// eslint-disable-next-line react/prop-types
const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="border rounded border-stone-600 px-8 py-2 mb-8">toggle</button>
  )
}

export default Button