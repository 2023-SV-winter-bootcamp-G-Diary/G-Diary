import React from 'react';
import styled from 'styled-components';
function IntroduceL(){
  return( 
    <IntroduceContainer>
      <LogoImg src="images/logo.svg" alt="logo" />
      <Introducetitle>
       What about<span style={{color:'orange', fontWeight:'700'}}>&nbsp;G-Diary?</span>
      </Introducetitle>
      <div style={{fontSize:'23px', textAlign:'center', fontFamily:'Comic Sans MS', marginBottom:'8px', color:'#777777'}}>About Team..?</div>
      <IntroduceTeam>
        <Team><TeamImg src="images/background.png" alt="team" /><TeamGit href="https://github.com/gmlrude">HeeKyeong</TeamGit></Team>
        <Team><TeamImg src="images/background.png" alt="team" /><TeamGit href="https://github.com/aristo0922">AhRyeong</TeamGit></Team>
        <Team><TeamImg src="images/background.png" alt="team" /><TeamGit href="https://github.com/yangwonjoon">WonJoon</TeamGit></Team>
        <Team><TeamImg src="images/background.png" alt="team" /><TeamGit href='https://github.com/gs0428'>GwangSoo</TeamGit></Team>
        <Team><TeamImg src="images/background.png" alt="team" /><TeamGit href='https://github.com/yunyoungse2222'>YoungSe</TeamGit></Team>
        <Team><TeamImg src="images/background.png" alt="team" /><TeamGit href='https://github.com/alswlfl29'>MinJi</TeamGit></Team>
      </IntroduceTeam>
    </IntroduceContainer>)
}
export default IntroduceL;

export const IntroduceContainer = styled.div`
    position: absolute;  
    width: 600px;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 90;
`

const Introducetitle =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 80px;
    font-size: 38px;
    font-family:Comic Sans MS;
    font-style: italic;
`

const LogoImg = styled.img`
    width: 20%;
    border:none;
`

const IntroduceTeam = styled.div`
    width: 100%;
    height: 60%;
    // border: 3px solid black;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 60px;
`

const Team = styled.div`
    width: 45%;
    display: flex;
    // justify-content: center;
    align-items:center;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 8px;
    &>p{
        font-size: 1.2em;
        margin-left: 10px;
        font-family:Comic Sans MS;
    }
`

const TeamImg = styled.img`
    width: 130px;
    height: 130px;
    border: 2px dashed gray;
    border-radius: 10%;
    object-fit: cover;
`

const TeamGit = styled.a`
    text-decoration:none;
    cursor: pointer;
    color: black;
    font-family:Comic Sans MS;
    font-size: 20px;
    &:visited{
        text-decoration:none;
        color:black;
    }
    &:hover{
        color: orange;
    }
    margin-left: 10px;
`