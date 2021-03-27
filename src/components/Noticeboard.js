import React from 'react';
import  {Link } from 'react-router-dom';

function Noticeboard() {

    return (
        <div>
            <div className="description_title">
                <h2 className="description_title_h2">CRUD 게시판</h2>
                <p className="description_title_p">2021.2 ~ 2021.3 (1인 프로젝트)</p>
                <a className="description_a" href = "https://bulletinboardsite.netlify.app">게시판 웹사이트로 이동</a>
            </div>
            <div className="description_text">
                <p className="description_text_p">CRUD 게시판 사이트는 회원가입, 로그인, 글 작성, 글 삭제, 글 수정을 할 수 있는 커뮤니티 게시판입니다. 1인 프로젝트로 React 실력 향상과 RestAPI 학습을 목적으로 만들었습니다.</p>
            </div>
            <div className="description_skils">
                <h4 className="description_sktil_p">사용 기술 - React, HTML, CSS, Javascript, Node.js, Mysql</h4>
            </div>
            <div className="divider">
            </div>
            <div className="description_contribution">
                <p className="description_contribution_p">저는 이런 일에 기여했습니다.</p>
                <li className="description_contribution_li">회원가입 및 로그인 시스템 구축 (기여도 100%)</li>
                <p className="description_contribution_p2">fetch를 사용해서 get요청, post 전송을 수행해 로그인, 회원가입이 가능하게 구축</p>
                <p className="description_contribution_p2">가입 정보를 넣고 회원가입 버튼을 누르면 중복없이 가입할 수 있는 시스템 구축</p>
                <p className="description_contribution_p2">sessionStorage를 사용해서 로그인이 유지 될 수 있도록 구축</p>

                <li className="description_contribution_li">글 작성, 글 수정, 글 삭제 기능 구축 (기여도 100%)</li>
                <p className="description_contribution_p2">닉네임, 글 제목, 날짜, 본문 내용을 객체에 넣어 웹 서버에 전송해 글 정보 DB에 저장</p>
                <p className="description_contribution_p2">기존 글 정보에 새로운 정보를 객체에 담아 웹 서버에 전송해 글 수정</p>
                <p className="description_contribution_p2">작성된 글을 웹 서버에 post 전송해 글 삭제 구축</p>

                <li className="description_contribution_li">웹 서버 구축 (기여도 100%)</li>
                <p className="description_contribution_p2">Node.js Express로 웹서버를 구축</p>
                <p className="description_contribution_p2">웹 서버와 Mysql을 연동</p>
                <p className="description_contribution_p2">클라이언트한테 get요청, post 전송이 오면 CRUD를 하는 시스템 구축</p>

                <li className="description_contribution_li">웹 호스팅, 배포 (기여도 100%)</li>
                <p className="description_contribution_p2">Netlify를 사용해서 웹 사이트 배포</p>
                <p className="description_contribution_p2">Hroku를 사용해서 웹 서버 배포</p>
            </div>
        </div>
    );
  
  }


export default Noticeboard;