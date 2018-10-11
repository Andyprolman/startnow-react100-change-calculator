import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      alertSuccess: '',
      alertDanger: '',
      success: true,
      usa: true,
      usd: {
        bills: {
          twenties: 0,
          tens: 0,
          fives: 0,
          ones: 0,
        },
        coins: {
          quarters: 0,
          dimes: 0,
          nickels: 0,
          pennies: 0,
        }
      },
      eur: {
        bills: {
          twenties: 0,
          tens: 0,
          fives: 0,
        },
        coins: {
          oneCent: 0,
          fiveCent: 0,
          tenCent: 0,
          twentyCent: 0,
          ones: 0,
        }
      }


    }
  
    this.changeValues = this.changeValues.bind(this);
    this.calculate = this.calculate.bind(this);
    this.toggleCurrency = this.toggleCurrency.bind(this);
    
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
    const nickels = Math.ceil((coin-((quarters*.25)+(dimes*.10)))/.05)
    const pennies = Math.round((coin-((quarters*.25)+(dimes*.10)+(nickels*.05)))/.01);
    const eurTwentyCent = Math.floor(coin/.20);
    this.setState({ 
      success: (change >= 0) ? true : false, 
      alertSuccessUsd:`The total change due is $${change}`,
      alertSuccessEur: `The total change due is €${change}`, 
      alertDangerUsd: `Additional $${negChange} still owed`,
      alertDangerEur: `Additional €${negChange} still owed`,
      usd: {
        bills: {
          twenties: change > 0 ? twenties : 0,
          tens: change > 0 ? tens : 0,
          fives: change > 0 ? fives : 0,
          ones:  change > 0 ? ones : 0,
        },
        coins: {
          quarters: change > 0 ? quarters : 0,
          dimes: change > 0 ? dimes : 0,
          nickels: change > 0 ? nickels : 0,
          pennies: change > 0 ? pennies : 0,
        }
      },
      eur: {
        bills: {
          twenties: change > 0 ? twenties : 0,
          tens: change > 0 ? tens : 0,
          fives: change > 0 ? fives : 0,
        },
        coins: {
          ones: change > 0 ? ones : 0,
          twentyCent: change > 0 ? eurTwentyCent : 0,
          tenCent: change > 0 ? dimes : 0,
          fiveCent: change > 0 ? nickels : 0,
          oneCent: change > 0 ? pennies : 0,
        }
      }
        
    });
    
  }

  toggleCurrency(e){
    this.setState({
      usa: !this.state.usa
    })


  }
  
  render(){
    var select = {
      paddingLeft: '20px',
      marginLeft: '8px',
      marginBottom: '10px',
      backgroundColor: '#e6e6e6'
    }

    var panel = {
      borderLeftWidth: '0px',
      paddingLeft: '2px',
      height: '262px',
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
    var twenties = 0;
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
                    <div className='custom-select' style={{width: '200px'}}>
                      <select className='form-control' style={select} onChange={this.toggleCurrency}>
                        <option value='0'>USD</option>
                        <option value='1'>EUR</option>
                      </select>
                    </div>
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
          <div className='col-md-8 well change' id='usd' hidden={!this.state.usa}>
            <div className='alerts' style={{textAlign: 'center', fontWeight: 'bold'}}>
              <div className='alert alert-success' hidden={!this.state.success}>{this.state.alertSuccessUsd}</div>
              <div className='alert alert-danger' hidden={this.state.success} >{this.state.alertDangerUsd}</div>
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='twent' style={{fontWeight: 'bold'}}> twenties</h4>
                  <p name='twenties'className='change'>{this.state.usd.bills.twenties}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='tens' style={{fontWeight: 'bold'}}> tens</h4>
                  <p name='tens' className='change'>{this.state.usd.bills.tens}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='fives' style={{fontWeight: 'bold'}}> fives</h4>
                  <p name='fives' className='change'>{this.state.usd.bills.fives}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='ones' style={{fontWeight: 'bold'}}>ones</h4>
                  <p name='ones' className='change'>{this.state.usd.bills.ones}</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='quarters' style={{fontWeight: 'bold'}}>quarters</h4>
                  <p name='quarters' className='change'>{this.state.usd.coins.quarters}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='dimes' style={{fontWeight: 'bold'}}>dimes</h4>
                  <p name='dimes' className='change'>{this.state.usd.coins.dimes}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='nickels' style={{fontWeight: 'bold'}}>nickels</h4>
                  <p name='nickels' className='change'>{this.state.usd.coins.nickels}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='pennies' style={{fontWeight: 'bold'}}>pennies</h4>
                  <p name='pennies' className='change'>{this.state.usd.coins.pennies}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 well' id='eur' hidden={this.state.usa}>
            <div className='alerts' style={{textAlign: 'center', fontWeight: 'bold'}}>
              <div className='alert alert-success' hidden={!this.state.success}>{this.state.alertSuccessEur}</div>
              <div className='alert alert-danger' hidden={this.state.success} >{this.state.alertDangerEur}</div>
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='twenties' style={{fontWeight: 'bold'}}>EUR Twenties</h4>
                  <p name='twenties'className='num-twenties'>{this.state.eur.bills.twenties}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='tens' style={{fontWeight: 'bold'}}>EUR Tens</h4>
                  <p name='tens' className='num-tens'>{this.state.eur.bills.tens}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='fives' style={{fontWeight: 'bold'}}>EUR Fives</h4>
                  <p name='fives' className='num-fives'>{this.state.eur.bills.fives}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='ones' style={{fontWeight: 'bold'}}>EUR Ones</h4>
                  <p name='ones' className='num-ones'>{this.state.eur.coins.ones}</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='quarters' style={{fontWeight: 'bold'}}>EUR Twenty Cents</h4>
                  <p name='quarters' className='num-quarters'>{this.state.eur.coins.twentyCent}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='dimes' style={{fontWeight: 'bold'}}>EUR Ten Cents</h4>
                  <p name='dimes' className='num-dimes'>{this.state.eur.coins.tenCent}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='nickels' style={{fontWeight: 'bold'}}>EUR Five Cents</h4>
                  <p name='nickels' className='num-nickels'>{this.state.eur.coins.fiveCent}</p>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='well' style={{backgroundColor:'#e6e6e6',textAlign:'center'}}>
                  <h4 className='pennies' style={{fontWeight: 'bold'}}>EUR One Cent</h4>
                  <p name='pennies' className='num-pennies'>{this.state.eur.coins.oneCent}</p>
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

