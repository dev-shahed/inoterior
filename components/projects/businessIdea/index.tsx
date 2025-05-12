import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Project } from 'types/projectType';
import data from './data';

interface Props {
  project: Project;
}

export default function BusinessIdea({ project }: Props) {
  let { ideas, images, _id, title, featureImg } = project;

  if (!ideas) {
    ideas =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Wecusandae debitis facere quidem animi placeat maxime cuuntur at voluptatib uod numuam pariatur libero laborum laudantium non. Vitae optio, distinctio earum facere magni natus eaque esse corporis dolorem! Similique fugiatime magnis dis parturient montes, nascetur ridiculus mus faucibus sed eros dapibus. Excepturi quos conse ctetur adipi sicing elit provi dent laud atium vWecusandae debitis facere quidem animi placeat maxim';
  }

  return (
    <Container>
      <Typography variant="h4">Best Business Ideas</Typography>
      <Box color={'gray'} dangerouslySetInnerHTML={{ __html: ideas }} marginY={2} />
      <Grid container spacing={2} flexDirection="row" alignItems="center" justifyContent="center" marginY={5}>
        {data?.map((img) => (
          <Grid item md={4} sm={6} xs={12} key={img.id}>
            <Image
              src={img.image}
              alt={title}
              height={600}
              width={600}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://i.ibb.co/KV27zx8/skeleton.jpg"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
