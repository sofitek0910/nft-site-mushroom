import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

 
const Home = props => (
  <div className="main-page">
      <nav class="navbar container-fixed p-4 wow fadeInDown">
        <a href="">
            <div class="navbar_logo float-left headline-font">
                <img class="logo-jocker" src="./assets/images/logo.png"/> SHROOMIE
            </div>
        </a>
    </nav>
    <section class="py-3">
        <div class="row mx-0 px-0">
            <div class="col-md-7 d-flex align-items-center">
                <div class="pl-md-3">
                    <div class="wow fadeInUp">
                        <span class="font_bgdefault line-height-15">Mint your Shroomie</span> &nbsp;&nbsp;&nbsp;<div class="font_bgundefault line-height-15">at a fragtion of BNB</div>
                    </div>
                    <div class="pt-md-3  wow fadeInUp">
                        <span class="font_general line-height-18">
                        Shroomies are mysterious creatures that spawned out of nowhere in every part of the universe. 
                        Legends say they are so adorable that not even the most fearsome monsters dare to hurt them. 
                        There exists 4 Leaders among the cute Shroomies, one governing in each of the four major regions of Lucid Land Universe, namely ISO 998, RUXA, Magiallo and Inferno. 
                        Obviously, Shroomies at the end are still monsters and by nature, they don’t follow a strict hierarchy. 
                        Thus, chaos broke out as they ran wild across the universe. 
                        Now it’s time to go out and catch one for yourself and tame it as your adorable partner!
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-5 mt-md-0 mt-5 pr-5 mr-0 wow rubberBand">
                <div>
                    <img class="img-thumbnail" src="./assets/media/character.gif" class="w-100"/>
                </div>

            </div>
        </div>
    </section>
    <section class="slide-section">
        <div class="common_title justify-content-center wow zoomInUp headline-font">
            Meet our Shroomies
        </div>
        <div class="owl-carousel owl-theme owl-carousel-block">
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output1.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output2.png" alt=""/>  
                <img class="owl-sub-item" src="./assets/media/output9.png" alt=""/> 
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output3.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output4.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output10.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output5.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output6.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output11.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output7.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output8.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output12.png" alt=""/>      
            </div>    
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output13.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output14.png" alt=""/>  
                <img class="owl-sub-item" src="./assets/media/output15.png" alt=""/> 
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output16.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output17.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output18.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output19.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output20.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output21.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output22.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output23.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output24.png" alt=""/>      
            </div>   

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output25.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output26.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output27.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output28.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output29.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output30.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output31.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output32.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output33.png" alt=""/>      
            </div>  

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output34.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output35.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output36.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output37.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output38.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output39.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output40.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output41.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output42.png" alt=""/>      
            </div>   

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output43.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output44.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output45.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output46.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output47.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output48.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output49.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output50.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output51.png" alt=""/>      
            </div>

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output52.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output53.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output54.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output55.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output56.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output57.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output58.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output59.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output60.png" alt=""/>      
            </div>   

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output61.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output62.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output63.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output64.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output65.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output66.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output67.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output68.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output69.png" alt=""/>      
            </div>

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output70.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output71.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output72.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output73.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output74.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output75.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output76.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output77.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output78.png" alt=""/>      
            </div>   

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output79.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output80.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output81.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output82.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output83.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output84.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output85.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output86.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output87.png" alt=""/>      
            </div>
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output88.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output89.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output90.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output91.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output92.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output93.png" alt=""/>      
            </div>   

            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output94.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output95.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output96.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output97.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output98.png" alt=""/>    
                <img class="owl-sub-item" src="./assets/media/output99.png" alt=""/>   
            </div>
        
            <div class="item">      
                <img class="owl-sub-item" src="./assets/media/output100.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output101.png" alt=""/>   
                <img class="owl-sub-item" src="./assets/media/output102.png" alt=""/>      
            </div>
        </div>
    </section>

    <section class="common mt-5 container-fixed p-0 position-relative commingsoon-section">
        <div class="common_title_other justify-content-center wow zoomInUp headline-font">
            THE ANTIWHALE SYSTEM 
        </div>
        <div class="common_title_other justify-content-center wow zoomInUp headline-font">
            TO PROTECT OUR HOLDERS!
        </div>
        <div className="row m-0">
            <div class="col-md-6 col-sm-12 text-center wow zoomInUp">
                <button class="mint_button btn mt-5">MINT YOUR SHROOMIE</button>
            </div>
            <div class="col-md-6 col-sm-12 text-center wow zoomInUp">
                <button class="mint_button btn mt-5">MINT YOUR HERO</button>
            </div>
        </div>
    </section>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
