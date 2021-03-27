import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Noticeboard from './Noticeboard';
import Maple from './Maple';
import Smartwindow from './Smartwindow';
import Dietapp from './Dietapp';

function Main() {

    const handleClick = () => {
        
        if(window.innerWidth >750){
            window.scrollTo(0, 860);
        }else if(window.innerWidth <=750&& window.innerWidth >600) {
            window.scrollTo(0, 710);
        }else if(window.innerWidth <=600&& window.innerWidth >540) {
            window.scrollTo(0, 650);
        }else if(window.innerWidth <=540&& window.innerWidth >485) {
            window.scrollTo(0, 630);
        }else if(window.innerWidth <=485&& window.innerWidth >450) {
            window.scrollTo(0, 700);
        }else if(window.innerWidth <=450&& window.innerWidth >410) {
            window.scrollTo(0, 600);
        }else if(window.innerWidth <=410) {
            window.scrollTo(0, 550);
        }
        
    }
    return (
        <BrowserRouter>
        <div>
            <section className="firstSection">
                <div className="intro_first">
                    <h1>안녕하세요. 최세현입니다.</h1>
                </div>
                <div className="divider">
                </div>
                <div className="intro_Greetings">
                    <p>새로운 일에 도전하는 것을 좋아하는 신입 개발자입니다. 배우는 과정을 즐기고 어려운 일에 부딪혀 고민하고 해결하는 것을 좋아합니다. 제작물이 눈에 보이는 Frontend에 빠져 개발자를 희망하게 되었습니다. </p>
                </div>
                <div className="skils">
                    <div className="skilTitle">
                        <h3>Skils</h3>
                    </div>
                    <div className="skilsname">
                        <li className="skilsList"><i className="fab fa-html5"></i> <p>HTML</p> </li>
                        <li className="skilsList"><i className="fab fa-css3-alt"></i> <p>CSS3</p> </li>
                        <li className="skilsList"><i className="fab fa-js-square"></i> <p>Javascript</p> </li>
                        <li className="skilsList"><i className="fab fa-react"></i> <p>React</p> </li>
                    </div>
                    <div className="skilsname">
                        <li className="skilsList"><i className="fab fa-node"></i> <p>Node.js</p> </li>
                        <li className="skilsList"><i className="fas fa-database"></i> <p>Mysql</p> </li>
                        <li className="skilsList"><i className="fas  fa-copyright"></i> <p>C언어</p> </li>
                        <li className="skilsList"><i className="fab fa-python"></i> <p>Python</p> </li>
                        <li className="skilsList"><i className="fab fa-android"></i> <p>AndroidStudio</p> </li>
                    </div>
                </div>
            </section>
                <section className="projectDescriptionSection">
                    <div id="project" className="description_first">
                        <h1>Project Description</h1>
                    </div>
                    <li className="description_li">
                        <Link className="btn btn--stripe btn--radius" to="/">CRUD 게시판</Link>
                        <Link className="btn btn--stripe btn--radius" to="/Maple">메이플 호감도 테스트</Link>
                        <Link className="btn btn--stripe btn--radius" to="/Smartwindow">스마트 창문</Link>
                        <Link className="btn btn--stripe btn--radius" to="/Dietapp">다이어트 APP</Link>
                    </li>
                    <Route path="/" exact component={Noticeboard} />
                    <Route path="/Maple" exact component={Maple} />
                    <Route path="/Smartwindow" exact component={Smartwindow} />
                    <Route path="/Dietapp" exact component={Dietapp} />
                    <div className="backproject_div">
                        <div className="backproject">
                            <Link to="" onClick={handleClick} className="backproject_link"> <p className="backproject_link_p">↑</p> <h4>프로젝트 더 보기</h4> </Link>
                        </div>
                    </div>
                </section>
                <section className="certificateSection">
                    <div className="certificate_title">
                        <h1>자격증 /</h1><h1 className="certificate_title_h1"> Certificate</h1>
                    </div>
                    <div className="certificate">
                        <li>COS Pro(Python) 2급 - YBM</li>
                        <li>MOS Access - Microsoft</li>
                        <li>MOS Word - Microsoft</li>
                    </div>
                </section>
            
        </div>
          </BrowserRouter>
    );

}


export default Main;