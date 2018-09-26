import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      alert: ''
    }
    this.changeValues = this.changeValues.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  changeValues(e){
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  calculate(e){
    e.preventDefault()
    const change = this.state.amountReceived - this.state.amountDue;
    this.setState({
      alert: `The total change due is $${change}.`
    })

    console.log(change);
    console.log(this.state);
  }
  
  render() {



    var panel = {
      borderLeftWidth: '0px',
      paddingLeft: '2px',
      height: '222px',
    }

    var panelBody = {    
      padding: '5px',
    }

    var label1 = {
      padding: '0 10px 10px 10px',
      width: '337 px',
    }

    var label2 = {
      padding: '10px 10px 10px 10px',
      width: '337 px',
    }

    var input = {
      padding: '0 80px',
      marginLeft: '10px',
      marginRight: '5px',
    }

    var button = {
      margin: '10px',
      width: '316px',
    }
    return(
      <div className='container'>
        <div id='header'>
          <h1 style={{color:'white'}}>Change Calculator</h1>
        </div>
        <hr id='tagline' style={{width: '1153px'}}>
        </hr>
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel panel-default' style={panel}>
              <div className='panel-heading'>Enter information.</div>
              <div className='panel-body container' style={panelBody}></div>
                <form onSubmit={this.calculate}>
                  <div className='form-group'>
                    <div style={label1}>
                      <label htmlFor='amountDue'>How much is due?</label>
                    </div>
                    <div>
                      <input name='amountDue' type='number' step='0.01' style={input} onChange={this.changeValues}/>
                    </div>
                    <div style={label2}>
                      <label htmlFor='amountReceived'>How much was received?</label>
                    </div>
                    <div>
                      <input name='amountReceived' type='number' step='0.01' style={input} onChange={this.changeValues}/>
                    </div>
                    <div>
                      <button name='button' type='submit' className='btn-primary' style={button}>Calulate</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
          <div className='col-md-8 well'>
            <div className='alert alert-success'>{this.state.alert}</div>
            <div className='row'>
              <div className='col-md-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='twenties' style={{fontWeight: 'bold'}}>Twenties</h4>
                  <p className='num-twenties'>0</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='tens' style={{fontWeight: 'bold'}}>Tens</h4>
                  <p className='num-tens'>0</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='fives' style={{fontWeight: 'bold'}}>Fives</h4>
                  <p className='num-fives'>0</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='ones' style={{fontWeight: 'bold'}}>Ones</h4>
                  <p className='num-ones'>0</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='quarters' style={{fontWeight: 'bold'}}>Quarters</h4>
                  <p className='num-quarters'>0</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='dimes' style={{fontWeight: 'bold'}}>Dimes</h4>
                  <p className='num-dimes'>0</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='nickels' style={{fontWeight: 'bold'}}>Nickels</h4>
                  <p className='num-nickels'>0</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='pennies' style={{fontWeight: 'bold'}}>Pennies</h4>
                  <p className='num-pennies'>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    )

  }
}

export default App;

