import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  /* width: 50%;
  margin: auto; */
`;

export const InnerContainer = styled.div`
  width: 50%;
  margin: auto;
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
  margin-left: 50px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  display: inline-block;
  position: fixed;
  top: 25px;
  animation-name: ${fadeIn};
`;

export const Reviews = styled.div`
`;

export const Overview = styled.div`
`;