const DenominationItem = props => {
  const {ech, del, key} = props
  const {id, value} = ech

  const de = () => {
    del(value)
  }
  return (
    <li>
      <li>
        <button type="button" onClick={de}>
          {value}
        </button>
      </li>
    </li>
  )
}

export default DenominationItem
