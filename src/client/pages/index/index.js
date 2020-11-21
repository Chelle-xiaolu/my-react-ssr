const React = require('react')

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  handlerClick() {
    alert('一起来玩react-ssr啊！')
  }
  render() {
    return <h1 onClick={this.handlerClick}>Click Here!</h1>
  }
}