import React, { Component } from 'react';
import { Button, Avatar, Badge, Card, Row, Col } from 'antd';

class App extends Component {
  constructor() {
    super()
    this.state ={
        voteNum: 0
    }
  }

  renderList(list) {
    return list.map(item => <li>I'm {item}!</li>)
  }

  voteForMe(){
    const voteNum = this.state.voteNum
    this.setState({
      voteNum: voteNum+1
    })
  }
  render() {
    const myList = ['Dingding', 'Lala', 'Dissy', 'Po']
    console.log(myList)
    return (
      <div>
        <div>
          <h1>We're teletubbies!</h1>
          <p>Welcome to teletubbies' garden.</p>
          <br />
          <Row gutter={16}>
           <Col span={8}>
             <Card>
              <Badge count={this.state.voteNum}>
                <Avatar size="large" icon="user" />
              </Badge>
              <br/>
              <br/>
              <Button onClick={this.voteForMe.bind(this)} type="primary">Vote for Jessy!</Button>
             </Card>
            </Col>
          </Row>
          <ol>
           {this.renderList(myList)}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
