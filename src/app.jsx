import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='container'>
        <div id='header'>
          <h1>Change Calculator</h1>
        </div>
        <div id='tagline'>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Enter information.</div>
              <div className='panel-body container'></div>
                <form>
                  <div className='form-group'>
                    <div>
                      <label for='amountDue'>How much is due?</label>
                    </div>
                    <div>
                      <input name='amountDue' type='number' step='0.01'/>
                    </div>
                    <div>
                      <label for='amountReceived'>How much was received?</label>
                    </div>
                    <div>
                      <input name='amountReceived' type='number' step='0.01'/>
                    </div>
                    <div>
                      <button name='button'  className='btn-primary'>Calulate</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
          <div className='col-md-8 well well-lg'>
            <div className='alert alert-success'>You owe this much.</div>
            <div className='row'>
              <div className='well well-md'> Twenties</div>
              <div className='well well-md'> Tens</div>
              <div className='well well-md'> Fives</div>
              <div className='well well-md'> Ones</div>

            </div>
          </div>
        </div>
      </div>
    

    )

  }
}

export default App;

