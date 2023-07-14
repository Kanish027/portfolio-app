import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons, SocialIcons2, SocialIcons3 } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       <LinkItem href='tel:8080908215'>808-090-8215</LinkItem>
       </LinkColumn>
       <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href='mailto:mohariyabunty@gmail.com'>mohariyabunty@gmail.com</LinkItem>
       </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/Kanish027' target='_blank'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons2 href='https://www.linkedin.com/in/kanish-mohariya-7a904a240/' target='_blank'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons2>
      <SocialIcons3 href='https://www.instagram.com/kanish_mohariya/' target='_blank'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons3>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
