// import DefaultPicture from "../../assets/images/profile.png";
import Card from "../../components/card";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Loader } from "../../utils/style/atoms";
// import { useEffect, useState } from "react";
import {
  useFetch,
  useTheme,
} from "../../utils/hooks";
import { Link } from "react-router-dom";

// const freelanceProfiles = [
//   {
//     name: "Jane Doe",
//     jobTitle: "Devops",
//     picture: DefaultPicture,
//   },
//   {
//     name: "John Doe",
//     jobTitle: "Developpeur frontend",
//     picture: DefaultPicture,
//   },
//   {
//     name: "Jeanne Biche",
//     jobTitle: "Développeuse Fullstack",
//     picture: DefaultPicture,
//   },
// ];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// function Freelances() {
// const [isDataLoading, setDataLoading] =
//   useState(true);
// const [error, setError] = useState(false);
// const [freelancersList, setFreelancesList] =
//   useState([]);

// useEffect(() => {
//   async function fetchFreelances() {
//     setDataLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/freelances`
//       );
//       const { freelancersList } =
//         await response.json();
//       setFreelancesList(freelancersList);
//     } catch (error) {
//       console.log("===== error =====", error);
//       setError(true);
//     } finally {
//       setDataLoading(false);
//     }
//   }
//   fetchFreelances();
// }, []);

function Freelances() {
  const { theme } = useTheme();

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  );

  // Ici le "?" permet de s'assurer que data existe bien.
  const freelancersList =
    data?.freelancersList || [];

  if (error) {
    return <span>Il y a eu une erreur</span>;
  }

  return (
    <div>
      <PageTitle theme={theme}>
        Trouvez votre prestataire
      </PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs
        profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader
            theme={theme}
            data-testid="loader"
          />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map(
            (profile, index) => (
              <Link
                key={`freelance-${profile.id}`}
                to={`/profile/${profile.id}`}
              >
                <Card
                  key={`${profile.name}-${index}`}
                  label={profile.job}
                  title={profile.name}
                  picture={profile.picture}
                  theme={theme}
                />
              </Link>
            )
          )}
        </CardsContainer>
      )}
    </div>
  );
}

export default Freelances;
