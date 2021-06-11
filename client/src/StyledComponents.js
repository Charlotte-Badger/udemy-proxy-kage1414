import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
`;

export const InnerContainer = styled.div`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
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
  /* float: right;
  margin-left: 50px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  display: inline-block;
  position: fixed;
  top: 25px;
  animation-name: ${fadeIn}; */


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
  /* width: 1080px;
  padding-top: 1px; */
  background-color: black;
  position: relative;
  /* z-index: 1000; */
`;

// export const OverviewBackground = styled.div`
//   height: 80px;
//   width: 100%;
//   background-color: #1e1e1c;
//   position: fixed;
// `;

export const Featured = styled.div`
  margin-top: 32px;
`;

export const Pride = styled.div`
  width: 100%;
  height: 0.8rem;
  background: linear-gradient(90deg, rgb(100, 91, 83) 0%, rgb(235, 82, 82) 18.23%, rgb(247, 143, 47) 34.37%, rgb(244, 193, 81) 48.96%, rgb(82, 187, 118) 66.15%, rgb(38, 165, 215) 82.29%, rgb(224, 105, 183) 100%);
  z-index: 1010;
`;