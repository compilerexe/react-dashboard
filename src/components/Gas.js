import React, { Component } from 'react'
import Menu from './Menu.js'
import Gauge from './Gauge.jsx'

export default class Gas extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className='container'>
        <div className='section'>

          <div className='columns'>
            <div className="column is-3">
              <Menu url={this.props.location.pathname}/>
            </div>
            <div className="column is-9">
              <div className="card">
                <div className="card-content">

                  <div className="columns">
                    <div className="column has-text-centered">
                      <Gauge width='200' height='160' label='บริเวณ หน้าบ้าน' value='60' color='#ff9966'/>
                    </div>
                    <div className="column has-text-centered">
                      <Gauge width='200' height='160' label='บริเวณ หลังบ้าน' value='70' color='#ff4d4d'/>
                    </div>
                    <div className="column has-text-centered">
                      <Gauge width='200' height='160' label='บริเวณ ห้องครัว' value='10' color='#00cc00'/>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}