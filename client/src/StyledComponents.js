import styled from 'styled-components';

export const Container = styled.div`
  margin: 48px;
  max-width: 1200px;
`;

export const Service = styled.div`
  border: 1px solid #0f7c90;
`;

export const CourseContent = styled.div`
  float: left;
  max-width: 700px;
`;

export const Sidebar = styled.div`
  // margin-left: 796px;
  margin: 48px;
  padding: 24px;
  max-width: 292px;
  // float: right;
  border-radius: 4px;
  position: fixed;
  right: 48px;
  top: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StickySidebar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: yellow;
  padding: 50px;
`;

export const Reviews = styled.div`
  float: left;
  max-width: 700px;
`;