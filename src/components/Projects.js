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
    <div>
      <Card>
        <CardTitle tag='h3'>{projectInfo.title}</CardTitle>
        <CardBody>
          <CardImg id='screenshot' src={projectInfo.screenshot} />
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
