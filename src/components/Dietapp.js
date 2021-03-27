import React from 'react';


function Dietapp() {

    return (
        <div>
            <div className="description_title">
                <h2 className="description_title_h2">다이어트 APP</h2>
                <p className="description_title_p">2019.3 ~ 2019.7 (3인 프로젝트)</p>
                <a className="description_a" href="https://github.com/chltpgus/Diet-management-application">Github 웹사이트로 이동</a>
            </div>
            <div className="description_text">
                <p className="description_text_p">다이어트 APP는 다이어터에게 도움을 주는 어플리케이션입니다. 냉장고에 있는 재료를 APP에 체크해서 다이어트 음식, 레시피를 추천받을 수 있습니다. </p>
            </div>
            <div className="description_skils">
                <h4 className="description_sktil_p">사용 기술 - AndriodStudio, Xml, PHP, 카페24 Database</h4>
            </div>
            <div className="divider">
            </div>
            <div className="description_contribution">
                <p className="description_contribution_p">저는 이런 일에 기여했습니다.</p>

                <li className="description_contribution_li">냉장고 메뉴, 추천 레시피 구현 (기여도 100%)</li>
                <p className="description_contribution_p2">집 냉장고에 있는 재료를 선택해서 관리하는 메뉴 구축</p>
                <p className="description_contribution_p2">선택된 재료들로 만들 수 있는 다이어트 레시피를 추천해주는 기능 구현</p>

                <li className="description_contribution_li">로그인과 체크된 재료를 넣을 데이터베이스 구축 (기여도 30%)</li>
                <p className="description_contribution_p2">냉장고 메뉴에서 선택된 재료들을 데이터베이스에 넣어서 관리</p>
                <p className="description_contribution_p2">냉장고 데이터가 들어갈 수 있게 PHP 작성</p>

            </div>
        </div>
    );
  
  }


export default Dietapp;