// import logo from "../../logo.svg";
import "../../App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img
//           src={logo}
//           className="App-logo"
//           alt="logo"
//         />
//         <p>
//           Edit <code>src/index.jsx</code> and save
//           to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import styled from "styled-components";
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/style/atoms";
import HomeIllustration from "../../assets/images/home-illustration.svg";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

const Illustration = styled.img`
  flex: 1;
`;

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s'occupe du
            reste, avec les meilleurs talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  );
}

export default Home;
