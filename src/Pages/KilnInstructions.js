import React, { Component } from 'react';
import '../App.css';

import EdwinMenu from '../Components/EdwinMenu.js';
import NavBar from '../Components/NavBar.js';
import EdwinFooter from '../Components/EdwinFooter.js';
import GalleryItem from '../Components/GalleryItem.js';


class KilnInstructions extends Component {

  constructor() {
    super();
    
    this.state = {
     
    }
  }

 
  render() {
    
    return ( 
        <div>
            {/* Mobile Menu */}
              <EdwinMenu/>

            {/* Wrapper */}
              <div id="wrapper">

                {/* Header */}
                  <header id="header">
                    <a href="/" className="logo">Edwin Bodge Pottery</a>
                  </header>

                {/* Nav */}
                  <NavBar name="kiln_instructions"/>

                {/* Main */}
                  <div id="main">

                    {/* Post */} 
                      <section className="post" id="portfolio-post">
                        <header className="major">
                          <h1>Kiln Instructions</h1>
                        </header>

                        <header>
                          <h2>Handling Clay</h2>
                          <p>From wet clay to bone dry.</p>
                          <div class="row">
                            <div class="col-6 col-12">
                              <h3>Sculpting and Throwing</h3>
                                <ul>
                                  <li>Purchase <b><i>only</i></b> mid-range clay: cone 4-6. The most recent purchases have been <a id="kiln-anchor" href="http://www.lagunaclay.com/clays/western/wc390.php">Laguna Red clay</a> from Atlantic Pottery Supply.</li>
                                  <li>Keep clay wrapped in plastic at all times while not in use.</li>
                                  <li>When throwing, place a bat on the wheel using the bat pins to secure it to the wheel.</li>
                                  <li>Sculpt clay when it is leather hard -- this usually requires waiting 24 hours after throwing.</li>
                                </ul>
                              <h3>Preparing for the Primary Firing</h3>
                                <ul>
                                  <li>Let clay dry until <b><i>bone dry</i></b>. This should take 2-3 days in the summer, 4-5 days in the winter.</li>
                                  <li>When in doubt, wait another day. Wet clay will explode in the kiln.</li>
                                  <li>Use Scotch Brite to remove any blemishes from the clay before placing in the kiln.</li>
                                </ul>
                            </div>
                          </div>
                        </header>

                        <header>
                          <h2>Bisque Fire</h2>
                          <p>From bone dry clay to bisque.</p>
                          <div class="row">
                            <div class="col-6 col-12">
                              <h3>Loading the Kiln</h3>
                                <ul>
                                  <li>It is okay for clay to touch each other in the kiln, as long as they are bare clay (no clay, no underglaze).</li>
                                  <li>Watch <a id="kiln-anchor" href="https://www.youtube.com/watch?v=-HuhyFPa_-Y">this video</a> before loading the kiln. You will find shelves on the counter and posts in a tupperware bin above the wheel. </li>
                                </ul>
                              <h3>Programming the Kiln for Bisque (CONE 04)</h3>
                                <ul>
                                  <li>The kiln should be flashing between <strong>IDLE</strong> and the current temperature. If it is not (perhaps flashing <strong>CPLT</strong>) click <strong>STOP</strong>.</li>
                                  <li>Press <strong>CONE FIRE</strong>. The kiln will flash <strong>PRHT</strong>. Enter <strong>200</strong> (for 2 hours, 00 minutes). Press <strong>ENTER</strong>. </li>
                                  <li>The kiln will flash <strong>CONE</strong>. Enter 04. Press <strong>ENTER</strong>. <i> It is EXTREMELY IMPORTANT that you typed 04, and not just 4. This is a 200 degree difference. </i> </li>
                                  <li>The kiln will flash <strong>SPd</strong>. Press <strong>MED</strong> on the bottom left part of the panel. Press <strong>ENTER</strong>.</li>
                                  <li>The kiln will flash <strong>HOLD</strong>. Enter <strong>000</strong>. Press <strong>ENTER</strong>.</li>
                                  <li>The kiln will flash <strong>IDLE</strong>. Press <strong>REVIEW</strong> on the bottom right of the panel.</li>
                                  <li>The kiln will read all of the information you inputted. <i>MAKE SURE information is correct, and that temperature is 1945. If not, go back and redo the instructions</i>.</li>
                                  <li>Press <strong>START</strong>. Do not use the latch on the kiln, since it will incorrectly prop the top slightly open. If anything, place a large piece of fired ceramics on top - something that will not get hot.</li>
                                  <li>This firing should take about 9-10 hours.</li>
                                </ul>
                            </div>
                          </div>
                        </header>

                        <header>
                          <h2>Glazing and Second Fire</h2>
                          <p>From bisque to finished ware.</p>
                          <div class="row">
                            <div class="col-6 col-12">
                              <h3>Selecting a Glaze</h3>
                                <ul>
                                  <li>Use only underglazes and mid-range glazes. These glazes will say <i>Cone 5/6</i> or <i>Mid-Range</i>.</li>
                                  <li>Low-fire glazes will melt at these high temperatures. These say <i>Cone 06</i>. <strong>Do NOT use these glazes.</strong></li>
                                  <li>Do not use <i>Palladium</i> on kitchen-ware. This glaze contains lead.</li>
                                  <li>View test tiles, or <a id="kiln-anchor" href="/recent_work">recent work</a>, when selecting glazes. The first or top number corresponds to two coats of that glaze above two coats of the second or bottom glaze.</li>
                                </ul>
                              <h3>Applying Glaze</h3>
                                <ul>
                                  <li>Only apply glaze to bisque-ware, which has been fired once before. If you have not done this yet, go back to the above section.</li>
                                  <li>Do not glaze the bottom 3mm of the ceramics.</li>
                                  <li>Apply 3-4 coats of glaze to the ceramics, allowing coats to dry between.</li>
                                </ul>
                              <h3>Programming the Kiln</h3>
                                <ul>
                                  <li>The kiln should be flashing between <strong>IDLE</strong> and the current temperature. If it is not (perhaps flashing <strong>CPLT</strong>) click <strong>STOP</strong>.</li>
                                  <li>Press <strong>RAMP|HOLD</strong>.</li>

                                  <li>The kiln will flash <strong>PROG</strong> and <strong>1</strong>. Press <strong>ENTER</strong>.</li>
                                  <li>Press <strong>ENTER</strong> to confirm the following information as it appears on the screen.</li>
                                  <ul>
                                    <li><strong>RA-1:</strong> 100, <strong>F-1:</strong> 220,  <strong>HLd-1:</strong> 0.00</li>
                                    <li><strong>RA-2:</strong> 350, <strong>F-2:</strong> 2000, <strong>HLd-2:</strong> 0.00</li>
                                    <li><strong>RA-3:</strong> 150, <strong>F-3:</strong> 2200, <strong>HLd-3:</strong> 0.15</li>
                                    <li><strong>RA-4:</strong> 500, <strong>F-4:</strong> 2150, <strong>HLd-4:</strong> 0.15</li>
                                    <li><strong>RA-5:</strong> 125, <strong>F-5:</strong> 1400, <strong>HLd-5:</strong> 0.00</li>
                                  </ul>

                                  <li>Press <strong>ENTER</strong> until you get back to <strong>IDLE</strong>.</li>
                                  <li>The kiln will flash <strong>IDLE</strong>. Press <strong>REVIEW</strong> on the bottom right of the panel.</li>
                                  <li>The kiln will read all of the information you inputted. <i>MAKE SURE information is correct. If not, go back and redo the instructions</i>.</li>
                                  <li>Press <strong>START</strong>. Do not use the latch on the kiln, since it will incorrectly prop the top slightly open. If anything, place a large piece of fired ceramics on top - something that will not get hot.</li>
                                  <li>This firing should take about 14-15 hours.</li>
                                </ul>
                            </div>
                          </div>
                        </header>
                      
                      </section>
                        

                  </div>

                {/* Footer */}
                  <EdwinFooter/>

              </div>
          </div>
    );
  }
}
export default KilnInstructions;