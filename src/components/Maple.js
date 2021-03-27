import React from 'react';


function Maple() {

    return (
        <div>
            <div className="description_title">
                <h2 className="description_title_h2">메이플 호감도 테스트</h2>
                <p className="description_title_p">2021.1 ~ 2021.2 (1인 프로젝트)</p>
                <a className="description_a" href="https://mapleaing.netlify.app">테스트 웹사이트로 이동</a>
            </div>
            <div className="description_text">
                <p className="description_text_p">메이플 호감도 사이트는 메이플에서 호불호가 갈리는 캐릭터 얼굴의 호감도를 확인 할 수 있는 테스트 사이트 입니다.</p>
            </div>
            <div className="description_skils">
                <h4 className="description_sktil_p">사용 기술 - HTML, CSS, Javascript, Node.js, Mysql</h4>
            </div>
            <div className="divider">
            </div>
            <div className="description_contribution">
                <p className="description_contribution_p">저는 이런 일에 기여했습니다.</p>
                <li className="description_contribution_li">테스트를 완료한 인원 수 저장 (기여도 100%)</li>
                <p className="description_contribution_p2">사이트를 접속하면 get 요청으로 현재까지 완료한 인원수를 가져와서 저장</p>
                <p className="description_contribution_p2">테스트를 마치고 결과 확인 버튼을 누르면 get요청으로 받은 값에 1을 더해 post 전송으로 값 저장</p>

                <li className="description_contribution_li">웹 서버 구축 (기여도 100%)</li>
                <p className="description_contribution_p2">Node.js Express로 웹서버를 구축</p>
                <p className="description_contribution_p2">웹 서버와 Mysql을 연동</p>
                <p className="description_contribution_p2">클라이언트한테 get요청, post 전송이 오면 Read, Update를 하는 시스템 구축</p>

                <li className="description_contribution_li">웹 호스팅, 배포 (기여도 100%)</li>
                <p className="description_contribution_p2">Netlify를 사용해서 웹 사이트 배포</p>
                <p className="description_contribution_p2">Hroku를 사용해서 웹 서버 배포</p>
            </div>
        </div>
    );
  
  }


export default Maple;