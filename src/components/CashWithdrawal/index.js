import {Component} from 'react'
import DenominationItem from '../DenominationItem'

export default class CashWithdrawal extends Component {
  state = {mn: 2000}

  del = value => {
    const {mn} = this.state
    this.setState({mn: mn - value})
  }

  render() {
    const {denominationsList} = this.props

    const {mn} = this.state
    return (
      <div>
        <h1>Sarah Williams</h1>
        <p>Your Balance</p>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <p>{mn}</p>
        <div>
          <ul>
            {denominationsList.map(ech => (
              <DenominationItem key={ech.id} ech={ech} del={this.del} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
