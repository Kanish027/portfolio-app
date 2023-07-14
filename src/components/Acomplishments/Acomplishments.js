import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { ExternalLinks } from '../Projects/ProjectsStyles';

const data = [
  { platform: "GFG", text: 'Visit GFG Profile',visit:'https://auth.geeksforgeeks.org/user/mohariyabunty/practice'},
  { platform: "LeetCode", text: 'Visit LeetCode Profile',visit:'https://leetcode.com/kanish_mohariya/'},
  { platform: "CodeStudio", text: 'Visit CodeStudio Profile', visit:'https://www.codingninjas.com/studio/profile/8495bfbc-70d0-4f77-a42e-f878c43da672' },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Platforms</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.platform}</BoxNum>
          <a href={card.visit} style={{color: 'rgba(255, 255, 255, 0.75)', fontSize:'18px', lineHeight:'24px',letterSpacing:'0.02rem'}} target='_blank' >{card.text}</a>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
