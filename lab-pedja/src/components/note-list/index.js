import React from 'react'

class NodeList extends React.Component {
  constructor(props){
    super(props)

    this.NodeList = this.NodeList.bind(this);
  }

  NodeList() {
    return this.props.items.map((item, index)=> {
      return (
        <ul key={index}>
          <li>
            <h1>
              {item.title}
              <p>{item.content}</p>
            </h1>
          </li>
        </ul>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>List of Itesm</h1>
        {this.NodeList()}
      </div>
    )
  }
}

export default NodeList;