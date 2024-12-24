import { Box } from '@mui/material';
import { getSingleProject } from 'backend/projects';
import Footer from 'components/common/footer';
import Header from 'components/common/header';
import BusinessIdea from 'components/projects/businessIdea';
import Challenge from 'components/projects/challenge';
import ProjectDetails from 'components/projects/projectDetails';
import RelatedProject from 'components/projects/relatedProject';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Project } from 'types/projectType';

interface Props {
  project: Project;
}

export default function SingleProject({ project }: Props) {

  return (
    <>
      <Head>
        <title>{project.title} - Arcon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="header">
        <Header pageTitle="Arcon Work" breadcrumbTitle="Arcon Work" />
      </Box>
      <Box component="main">
        <ProjectDetails project={project} />
        <BusinessIdea project={project} />
        <Challenge challenge={project.challenges} />
        <RelatedProject relatedProjects={project?.relatedProjects} />
      </Box>
      <Box component="footer">
        <Footer />
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const { id } = params;
  const project = await getSingleProject(id);
  return {
    props: {
      project,
    },
  };
};
