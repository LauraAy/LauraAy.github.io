import React from 'react'
import {
  Link
} from 'react-router-dom'
const tesla = require('./BudgetTesla.png')
const mrb = require('./logo_mrb.png')
const garden = require('./Garden.jpg')

const AboutCard = () => {
  return (
  <>
  
<div className="card m-3"Name>
  <h2 className="card-title">Portfolio</h2>
  <hr />
  <div class="card-body">
   <div class="col-md-12">
  <h3>
  A sample representing my work in fullstack application development, data management, and project management. 
  </h3>
    </div>
  </div>
        <div className="row single-post mt-5 no-gutters">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <a href="https://provenanceonlineproject.wordpress.com/about/">
                  <img alt="POP" />
                  <div className="img-overlay">
                    <h2 className="bottom-text">One of my major projects at Penn Libraries. My primary role was project manager, which included working closely with developers on technical requirements and implementation. I also contributed code--ruby on rails, bootstrap, mysql--to the project application in coordination with the senior developer.</h2>
                  </div>
  <div className="row single-post mt-5 no-gutters">
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
                <a href="https://peaceful-bastion-92887.herokuapp.com">
            <img src={garden} alt="garden array" />
            <div className="img-overlay">
              <h5 className="bottom-text">Project 3: Garden Array</h5>
            </div>
          </a>
        </div>  
        <div className="col-md-6">
          <a href="https://limitless-reef-57804.herokuapp.com/">
            <img src={mrb} alt="my recipe box" />
            <div className="img-overlay">
              <h5 className="bottom-text">Project 2: My Recipe Box</h5>
            </div>
          </a>
        </div>        
          </a>
        </div>
      </div>
    </div>
  </div>  
</div>  
</>
  )
}

export default AboutCard