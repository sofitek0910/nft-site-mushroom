import React from 'react'

const Staking = () => (
  <div>
    <div className="main-page stake-page">
        <img className="stake-back" src="./assets/media/2.jpg"/>
        <div className="stake-content">
            <div className="claim-button">
                <img className="claim-button-img scale-hover" src="./assets/media/claim.png"/>
            </div>
            <div className="stake-button">
                <img className="stake-button-img scale-hover" src="./assets/media/stake.png"/>
            </div>
            <div className="unstake-button">
                <img className="unstake-button-img scale-hover" src="./assets/media/unstake.png"/>
            </div>
        </div>
    </div>
    <div className="mobile-block">
        <div className="connect-button-block">
            <img className="connect-button-img scale-hover" src="./assets/media/connect.png"/>
        </div>
        <img className="jocker-gang" src="./assets/media/jocker_gang1.png"/>
        <div className="mint-button">
            <img className="mint-button-img scale-hover" src="./assets/media/mint.png"/>
        </div>
        <div className="staking-block">
            <img src="./assets/media/farming_pool1.png"/>
            <div className="stake-content">
              <div className="claim-button">
                  <img className="claim-button-img scale-hover" src="./assets/media/claim.png"/>
              </div>
              <div className="stake-button">
                  <img className="stake-button-img scale-hover" src="./assets/media/stake.png"/>
              </div>
              <div className="unstake-button">
                  <img className="unstake-button-img scale-hover" src="./assets/media/unstake.png"/>
              </div>
          </div>
        </div>
        <div className="leaderboad">
            {/* <div className="leaderboard-title">
                LEADERBOARD
            </div> */}
            <img className="leader-img" src="./assets/media/leader.png"/>
        </div>
        <div className="become">
            <img className="become-jocker" src="./assets/media/become_jocker.png"/>
        </div>
      </div>
  </div>
)

export default Staking
