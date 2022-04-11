import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';

import Page from '../utils/components/Page';
import { getAllProjects } from './projectActions';
import { selectProjects } from './projectsSlice';

const ProjectIndex = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch, projects])

  interface Project {
    _id: String,
    project_name: String,
    tasks: any[],
  }

  const renderRow = (project: Project) => (
    <tr>
      <td>{project.project_name}</td>
      <td>
        <Link to={`/project/edit/${project._id}`}><FA name="eye" /></Link>
      </td>
    </tr>
  )
  return (
    <Page>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </Page>
  );
}

export default ProjectIndex;