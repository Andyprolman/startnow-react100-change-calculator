import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      alertSuccess: '',
      alertDanger: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      success: true,
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
    const change = (this.state.amountReceived - this.state.amountDue).toFixed(2);
    const negChange = change*(-1);
    const twenties = Math.floor(change/20);
    const tens = Math.floor((change-(twenties*20))/10);
    const fives = Math.floor((change-((twenties*20)+(tens*10)))/5);
    const ones = Math.floor(change-((twenties*20)+(tens*10)+(fives*5)))
    const coin = (change-Math.floor(change)).toFixed(2);
    const quarters = Math.floor(coin/.25);
    const dimes = Math.floor((coin-(quarters*.25))/.10)
    const nickels = Math.floor((coin-((quarters*.25)+(dimes*.10)))/.05)
    const pennies = Math.round((coin-((quarters*.25)+(dimes*.10)+(nickels*.05)))/.01);
    this.setState({ 
      success: (change >= 0) ? true : false, 
      alertSuccess: `The total change due is $${change}.`,
      alertDanger: `Additional $${negChange} still owed`,
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones, 
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
        
    });

  }
  
  render(){
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
            <div className='alerts' style={{textAlign: 'center', fontWeight: 'bold'}}>
              <div className='alert alert-success' hidden={!this.state.success}>{this.state.alertSuccess}</div>
              <div className='alert alert-danger' hidden={this.state.success} >{this.state.alertDanger}</div>
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='twenties' style={{fontWeight: 'bold'}}>Twenties</h4>
                  <p name='twenties'className='num-twenties'>{this.state.twenties}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='tens' style={{fontWeight: 'bold'}}>Tens</h4>
                  <p name='tens' className='num-tens'>{this.state.tens}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='fives' style={{fontWeight: 'bold'}}>Fives</h4>
                  <p name='fives' className='num-fives'>{this.state.fives}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='ones' style={{fontWeight: 'bold'}}>Ones</h4>
                  <p name='ones' className='num-ones'>{this.state.ones}</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='quarters' style={{fontWeight: 'bold'}}>Quarters</h4>
                  <p name='quarters' className='num-quarters'>{this.state.quarters}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='dimes' style={{fontWeight: 'bold'}}>Dimes</h4>
                  <p name='dimes' className='num-dimes'>{this.state.dimes}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='nickels' style={{fontWeight: 'bold'}}>Nickels</h4>
                  <p name='nickels' className='num-nickels'>{this.state.nickels}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='pennies' style={{fontWeight: 'bold'}}>Pennies</h4>
                  <p name='pennies' className='num-pennies'>{this.state.pennies}</p>
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

