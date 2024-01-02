import "./home.css";
import { MdNavigateBefore } from "react-icons/md";
import React from "react";
import Logarithm from "./logarith.jpg";
import { MdNavigateNext } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";

const Home = () => {
  return (
    <div className="home">
      <div className="student-section">
        <div className="flex text-red-600 item-center justify-start mt-2">
          <MdNavigateBefore className="font-bold text-3xl" />
          <h4 className="mt-[2px]">Student Plan</h4>
        </div>

        <div className="logarithm-section flex">
          <img className="log-img" src={Logarithm} alt="" />
          <div className="logarithm flex ">
            <div className="log-left">
              <div className="ml-4">
                <h4 className="font-bold text-gray-700">LOGRITHM</h4>
                <h6>TEST:1</h6>
              </div>
              <div className="log-p flex gap-6 ml-4 mt-4 flex-row">
                <div>
                  <p>
                    <span className="subto border-2">10</span> SUBTOPİC
                  </p>
                  <br />
                  <p>
                    <span className="subto timehr border-2">15 hr</span> TIME
                  </p>
                </div>

                <div>
                  <p>
                    <span className="subto border-2">55</span> QUESTION
                  </p>
                  <br />
                  <p>
                    <span className="subto border-2">25</span> DİFFİCULTY
                  </p>
                </div>
              </div>
              <div className="log-right flex mt-8 ml-4 gap-5">
                <button className="btn-go text-[#93C2BD] gap-3 flex items-center">
                  <MdNavigateBefore className="text-2xl" />
                  Go Back to Notes
                </button>
                <button className="btn-start gap-3 text-white flex items-center">
                  Start Practice <MdNavigateNext className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="plan-right mt-5 ml-8">
              <button className="btn-start text-white font-bold">
                + New Plan
              </button>
              <p className="ml-8 underline text-[#ff7b5b]">Reset Plan</p>
            </div>
          </div>

          <div className="level">
            <div className="flex log-level flex-col ml-8 mt-5">
              <p className="flex items-center">
                Logarithm Level <MdNavigateNext className="text-2xl" />
              </p>
              <div className="flex gap-5 items-center">
                <div class="progress-bar">
                  <div class="progress-bar-fill "></div>
                </div>
                <p>%24</p>
              </div>
            </div>
            <div className="flex circle-bg flex-row gap-6 ml-7">
              <div className="flex flex-col items-center">
                <div className="daire-log">
                  <div class="gradient-wrapper">
                    <div className="px-4" id="maincircle">
                      &nbsp;
                    </div>
                  </div>
                </div>
                <p className="font-bold mt-2">%14</p>

                <p>
                  Overall <br />
                  Progress
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="daire-log">
                  <div class="gradient-wrapperr">
                    <div id="maincircle">&nbsp;</div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
                <p className="font-bold mt-2">%74</p>
                <p>
                  Overall <br />
                  Progress
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="daire-log">
                  <div class="gradient-wrapperrr">
                    <div id="maincircle">&nbsp;</div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
                <p className="font-bold mt-2">3.4</p>
                <p>
                  Overall <br />
                  Progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static-section flex gap-5">
        <div className="static">
          <h4 className="text-[#ff7b5b] ml-1">Statistics</h4>
          <div className="stat-tab flex  justify-between mr-5 ml-5">
            <div className="grafic">
              <h3>60 %</h3>
              <div class="grafic-bar"></div>
            </div>
            <div className="grafic">
              <h3>75 %</h3>
              <div class="grafic-bar2"></div>
            </div>
            <div className="grafic">
              <h3>55 %</h3>
              <div class="grafic-bar3"></div>
            </div>
            <div className="grafic">
              <h3>85 %</h3>
              <div class="grafic-bar4"></div>
            </div>
          </div>

          <hr />
          <br />
          <div className="flex items-center justify-between mr-5 ml-3">
            <div>
              <p>Finished</p>
            </div>
            <div>
              <p>Comments</p>
            </div>
            <div>Shares</div>
            <div>Replies</div>
          </div>
        </div>
        <div className="tasks">
          <h3 className=" font-bold text-[#ff7b5b] ml-1">Tasks</h3>
          <div>
            <div className="flex justify-between mb-1 font-bold ml-5 mr-5 text-[#ff7b5b]">
              <p>OVERDUE TASKS</p>
              <p>DUE DATE</p>
              <p>ACTIONS</p>
            </div>
            <hr />
            <div className="flex  justify-between ml-5 mb-2 mr-9 mt-2">
              <div>The Plan Name-1</div>
              <div>10.07.2024</div>
              <div className="flex gap-5">
                <div>
                  <IoIosPaper />
                </div>
                <div>
                  <IoNewspaperOutline />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex  justify-between ml-5 mb-2 mr-9 mt-2">
              <div>The Plan Name-2</div>
              <div>22.08.2024</div>
              <div className="flex gap-5">
                <div>
                  <IoIosPaper />
                </div>
                <div>
                  <IoNewspaperOutline />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex  justify-between ml-5 mb-2 mr-9 mt-2">
              <div>The Plan Name-3</div>
              <div>12.09.2024</div>
              <div className="flex gap-5">
                <div>
                  <IoIosPaper />
                </div>
                <div>
                  <IoNewspaperOutline />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex  justify-between ml-5 mb-2 mr-9 mt-2">
              <div>The Plan Name-4</div>
              <div>17.09.2024</div>
              <div className="flex gap-5">
                <div>
                  <IoIosPaper />
                </div>
                <div>
                  <IoNewspaperOutline />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-center">
              <TbPointFilled />
              <TbPointFilled />
              <TbPointFilled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
