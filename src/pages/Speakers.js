import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Forms from '../components/Forms/Forms'
import Speaker from '../components/Speakers/Speaker'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

const SpeakersBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1195px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    color: #63B1F1;   
    font-size: 19px;  
    line-height: 27px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 695px;
  margin: 70px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Speakers = () => (
  <Page path="/speakers">
    <Section>
      <SpeakersBox>
        <div className="h1box"><h1>Speakers</h1></div>
        <Container>
          <Speaker photo="Trent-McConaghy" name="Trent-McConaghy" position="Founder" company="Company"
            bio="Trent McConaghy did AI research for two decades, including machine creativity and 
            AI to help drive Moore's Law, via two startups (both acquired) and a PhD. Now he 
            focuses on AI * blockchain, via Ocean to democratize AI data, and BigchainDB 
            decentralized database. His hobbies include Token Engineering and advising governments 
            on AI * blockchain"/>
          <Speaker photo="Shira-Frank" name="Shira-Frank" position="Founder" company="Company"
            bio="Shira brings over 15 years of work in politics, social change, women’s philanthropy, 
            and fundraising with her to the Blockchain and Fin-Tech industries. Shira spent seven years 
            as a Deputy Director for J Street working to transform the way Congress and the Executive 
            branch engage in the Middle East and to promote the creation of a two-state solution to the 
            Israeli-Palestinian conflict. Shira holds a degree in Government and Political Theory from 
            Smith College. "/>
          <Speaker photo="Santiago-Siri" name="Santiago Siri" position="Founder" company="Democracy Earth Foundation" 
            bio="Founder of Democracy Earth Foundation, a Y Combinator backed non-profit building 
            incorruptible digital governance technology; and the Partido de la Red (Peers Party), 
            the first digital political party that ran for elections with candidates committed to 
            people's will online. Partner of Bitex.la, a leading bitcoin exchange in Latin America. 
            Published 'Hacktivismo' in 2015 with Random House. Member of the World Economic Forum 
            since 2012. Awarded by MIT Technology Review and Singularity University. Co-founded 
            Argentine Game Developers Association in 2002."/>
          <Speaker photo="Raine-Revere" name="Raine Revere" position="Engineer and educator" company="Ethereum community"
            bio="Raine Revere is an engineer and educator in the Ethereum community who has spoken 
            at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism 
            and is the co-founder of Maiden, a company that delivers socially-aware blockchain 
            education, cultural & leadership development, and diversity-powered blockchain 
            consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique 
            capacity to engage deeply with both the technical and social aspects of technology."/>
          <Speaker photo="Mike-Goldin" name="Mike Goldin" position="Founder" company="Company"
            bio="Mike is the author of “token-curated registries 1.0”, a widely-cited paper which 
            originally formalized the basic design and properties of such cryptosystems. He launched 
            adChain and implemented its token sale, which sold out in one block. He has overseen and 
            facilitated the development of a widely-used TCR implementation, as well as multiple 
            graphical user interfaces for TCRs. He graduated from Columbia University with a degree 
            in computer science."/>
          <Speaker photo="Matt-Lockyer" name="Matt Lockyer" position="Founder" company="Soloblock Solutions"
            bio="Matt Lockyer wrote the Ethereum ERC-998 standard for Composable Tokens and his work 
            on Token Curated Registries (TCRs) has been published on a16z's crypto reading list. Matt 
            founded and operates the NFTy Magicians - a group of over 300 blockchain developers - as a 
            pendant to the Ethereum Foundation. He currently advises projects on their smart contract 
            architecture and token engineering processes with a background in full stack development, 
            computer science, UX research, public speaking and university lecturing."/>
          <Speaker photo="Mario-Laul" name="Mario Laul" position="Researcher" company="Placeholder Ventures"
            bio="Mario Laul works as a researcher for Placeholder, a New York venture capital firm investing 
            in decentralized information networks, and for Beyond the Technological Revolution, a four-year 
            research project led by Carlota Perez exploring the relationship between technology, finance, 
            and public policy. Each fall, he teaches an introductory course on the sociology of culture at 
            the Estonian Academy of Arts in Tallinn, and is looking to combine the study of technology governance 
            with a sociologically informed perspective on emerging forms of decentralized economic 
            and social coordination."/>
        </Container>
        <TextContainer id="speakers-form">
            <h2>Want to Speak at AraCon 2019?</h2>
            <p>If you would like to do a workshop or a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please register below</p>
        </TextContainer>
      </SpeakersBox>
      <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js"/>
      <div id="speakers"/>
    </Section>
  </Page>
);

export default Speakers