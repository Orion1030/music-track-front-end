import React from 'react';
import { Typography, Space, Row, Col, Divider } from 'antd';
import { StyledPage } from '~/styles/style';

const { Title, Paragraph } = Typography;

export const About = () => {
  return (
    <StyledPage>
      <Space direction="vertical" size="large">
        <Title level={2}>About Music Tracker</Title>
        <Divider />
        <Paragraph>
          This is a React application that allows users to search for and display music track metadata using ISRC codes. It interacts with a REST API to retrieve and store track information.
        </Paragraph>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={12}>
            <Title level={3}>Features</Title>
            <Paragraph>
              <ul>
                <li>Track creation and metadata retrieval using ISRC codes</li>
                <li>Creation and storage of track records</li>
                <li>Detailed display of track metadata (name, artist, album, etc.)</li>
                <li>Integration of track cover images</li>
                <li>Efficient state management using Redux for seamless data handling</li>
                <li>Robust error handling and informative user feedback</li>
                <li>Responsive design for various devices</li>
              </ul>
            </Paragraph>
          </Col>
          <Col sm={24} md={12}>
            <Title level={3}>Technology Stack</Title>
            <Paragraph>
              <ul>
                <li>React for dynamic user interface development</li>
                <li>React Router for seamless navigation</li>
                <li>Axios for efficient API communication</li>
                <li>Ant Design for polished UI components</li>
                <li>Styled Components for flexible, custom styling</li>
                <li>Vite as a fast, modern build tool</li>
                <li>TypeScript for enhanced code reliability and maintainability</li>
              </ul>
            </Paragraph>
          </Col>
        </Row>
      </Space>
    </StyledPage>
  );
}
