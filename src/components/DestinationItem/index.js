// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="list-container">
      <div>
        <img src={imgUrl} alt={name} className="image" />
        <p> {name} </p>
      </div>
    </li>
  )
}
export default DestinationItem
