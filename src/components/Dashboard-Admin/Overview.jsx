
import React from 'react';
import './overview.css';



function Overview() {
  return (
    <div className="overview">
      <div className="overview_wrappers">
        <div className="overview_cards d-flex">

          <div className="single_card">
            <div className="card_content">
              <span><h5>75,000</h5></span>
              <p>Total User</p>
            </div>

            <div className="overview_card_icon">
              <span>
              <i class="uil uil-user"></i>
              </span>
            </div>
          </div>

          <div className="single_card">
            <div className="card_content">
              <span><h5>75,000</h5></span>
              <p>Total Post</p>
            </div>

            <div className="overview_card_icon">
              <span>
              <i class="uil uil-video"></i>
              </span>
            </div>
          </div>

          <div className="single_card">
            <div className="card_content">
              <span><h5>75,000</h5></span>
              <p>Total Artikel</p>
            </div>

            <div className="overview_card_icon">
              <span>
              <i class="uil uil-file-bookmark-alt"></i>
              </span>
            </div>
          </div>

          <div className="single_card_last ">
            <div className="card_content">
              <span><h5>75,000</h5></span>
              <p>Total View</p>
            </div>

            <div className="overview_card_icon">
              <span>
              <i class="uil uil-eye"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Overview;