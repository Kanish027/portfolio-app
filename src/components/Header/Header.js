import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, SocialIcons2, SocialIcons3, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center", color:"white",marginBottom:"16px"}}>
          <DiCssdeck size="3rem"/><Span>Kanish Mohariya</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons className='github'  href='https://github.com/Kanish027' target='_blank'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons2 className='linkedin' href='https://www.linkedin.com/in/kanish-mohariya-7a904a240/' target='_blank'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons2>
      <SocialIcons3 className='insta' href='https://www.instagram.com/kanish_mohariya/' target='_blank'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons3>
    </Div3>
  </Container>
);

export default Header;