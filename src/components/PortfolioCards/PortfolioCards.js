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
  <h4>
   Click on the projects below to see examples of work for the recent UCI Coding Bootcamp.
  </h4>
    </div>
  </div>
  <div className="row single-post mt-5 no-gutters">
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
              <a href="https://banana-pudding-35031.herokuapp.com">
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
        <div className="col-md-6">
          <a href="https://carlnaza.github.io/parseSuperchargers/">
                <img src={tesla} alt="budget tesla"/>
            <div className="img-overlay">
              <h5 className="bottom-text">Project1: Budget Tesla</h5>
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