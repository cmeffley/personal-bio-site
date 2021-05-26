import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

function Projects({
  ...projectInfo
}) {
  return (
    <div className='project-container'>
      <Card className='project-card'>
          <div className='image-container'>
          <CardImg id='screenshot' src={projectInfo.screenshot} />
          <CardTitle tag='h3'>{projectInfo.title}</CardTitle>
          </div>
        <CardBody className='card-body'>
          <CardText>{projectInfo.description}</CardText>
          <CardText>{projectInfo.technologiesUsed}</CardText>
          <CardText><a href={projectInfo.githubUrl}>GitHub Repository</a></CardText>
          <CardText><a href={projectInfo.url}>Live Site</a></CardText>
        </CardBody>
      </Card>
    </div>
  );
}

Projects.propTypes = {
  projectInfo: PropTypes.object
};

export default Projects;
