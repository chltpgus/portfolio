import React from 'react';


function Smartwindow() {

    return (
        <div>
            <div className="description_title">
                <h2 className="description_title_h2">스마트 창문</h2>
                <p className="description_title_p">2020.3 ~ 2020.11 (4인 프로젝트)</p>
                <a className="description_a" href="https://github.com/chltpgus/SmartWindow">Github 웹사이트로 이동</a>
            </div>
            <div className="description_text">
                <p className="description_text_p">스마트 창문은 기상 정보에 맞춰 자동으로 창문을 제어할 수 있는 창문입니다. 어플리케이션을 통해서 외부에서도 창문을 제어할 수 있고, 창문에 지나치게 접근하는 사람을 감지해서 어플리케이션으로 받아 볼 수 있습니다. </p>
            </div>
            <div className="description_skils">
                <h4 className="description_sktil_p">사용 기술 - C언어, AndriodStudio, Python, apache, mysql, php</h4>
            </div>
            <div className="divider">
            </div>
            <div className="description_contribution">
                <p className="description_contribution_p">저는 이런 일에 기여했습니다.</p>

                <li className="description_contribution_li">센서 값으로 창문 제어 (기여도 100%)</li>
                <p className="description_contribution_p2">빗물 감지 센서, 온습도 센서, 미세먼지 센서를 연결해서 센서 값을 주기적으로 받아오게 구축</p>
                <p className="description_contribution_p2">가져온 센서 값이 상한선을 넘으면 창문이 자동으로 닫히게 모터 제어</p>

                <li className="description_contribution_li">어플리케이션 제작 (기여도 10%)</li>
                <p className="description_contribution_p2">어플리케이션과 라즈베리파이가 통신할 수 있는 시스템 구축</p>

                <li className="description_contribution_li">TCP/IP 서버 구축 및 연동(기여도 100%)</li>
                <p className="description_contribution_p2">어플리케이션에서 오는 신호를 받아 창문을 제어하기 위해 서버 구축</p>
                <p className="description_contribution_p2">센서 값으로 창문을 자동으로 제어하는 코드와 합치는 작업을 수행</p>

                <li className="description_contribution_li">디스플레이 구현 (기여도 30%)</li>
                <p className="description_contribution_p2">Magic Mirror 모듈을 설치해서 디스플레이 구현</p>
                <p className="description_contribution_p2">날씨 정보와 날씨별 옷차림, 뉴스 정보를 가져오는 추가 모듈을 설치, 설정</p>
            </div>
        </div>
    );
  
  }


export default Smartwindow;