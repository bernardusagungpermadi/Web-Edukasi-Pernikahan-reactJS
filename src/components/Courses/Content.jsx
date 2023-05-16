// content.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Nav, Tab } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';

function Content() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('video');
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='content-layout'>
      <Container>
        <h2>{post.title}</h2>

        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="video">Video</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="quiz">Quiz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="discussion">Discussion</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="video">
              <h3>Video Content</h3>
              <Col lg="6">
                <div className="choose__img">
                  <ReactPlayer url={post.thumbnail} controls width="100%" height="300px" />
                </div>
              </Col>
            </Tab.Pane>
            <Tab.Pane eventKey="quiz">
              <h3>Quiz Content</h3>
              {/* Tampilkan kuis */}
            </Tab.Pane>
            <Tab.Pane eventKey="discussion">
              <h3>Discussion Content</h3>
              {/* Tampilkan diskusi */}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Content;
