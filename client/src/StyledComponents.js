import styled, {keyframes} from 'styled-components';

export const BlackBar = styled.div`
  width: 100%;
  background-color: #1e1e1c;
  height: 378px;
  position: absolute;
  top: 0px;
`;

export const SmallBlackBar = styled.div`
  width: 100%;
  background-color: #1e1e1c;
  height: 78px;
  position: fixed;
  top: 0px;
`;

export const Container = styled.div`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
`;

export const BottomContainer = styled.div`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

export const InnerContainer = styled.div`
  display: inline-block;
  width: 600px;
`;

export const Service = styled.div`
  border: 1px solid #0f7c90;
`;

export const CourseContent = styled.div`
  max-width: 700px;
  margin-bottom: 50px;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Sidebar = styled.div`
  float: right;
  margin-top: 110px;
  margin-left: 700px;
  position: -webkit-sticky;
  position: sticky;
  top: 25px;
  z-index: 3000;
`;

export const Reviews = styled.div`
`;

export const Overview = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const TopContainer = styled.div`
  margin-left: 0;
  margin-right: 0;
  background-color: black;
  position: relative;
`;

export const Featured = styled.div`
  margin-top: 32px;
`;

export const Pride = styled.div`
  width: 100%;
  height: 0.8rem;
  background: linear-gradient(90deg, rgb(100, 91, 83) 0%, rgb(235, 82, 82) 18.23%, rgb(247, 143, 47) 34.37%, rgb(244, 193, 81) 48.96%, rgb(82, 187, 118) 66.15%, rgb(38, 165, 215) 82.29%, rgb(224, 105, 183) 100%);
  z-index: 1010;
`;