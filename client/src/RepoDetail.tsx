import React from 'react';
import { IRepo, RepoDetailProps } from './react-app-env';

// React.FC is a generic - give it a type reporesenting the shape of its props object
const RepoDetail: React.FC<RepoDetailProps> = (props) => {
  let content;
  if(Object.keys(props.repo).length) {
    // If repo has keys, we have data to show 
    content = (
      <>
      <h1>{props.repo.name}</h1>
      <p> by {props.repo.owner.login}</p>
      <p>Description: {props.repo.description}</p>
      <p>Template Repo: {props.repo.is_template}</p>
      </>
    )
  } else {
    content = (
    <>
      <p>No selected repo</p>
    </>
    );
  }
  return content;
}
export default RepoDetail;