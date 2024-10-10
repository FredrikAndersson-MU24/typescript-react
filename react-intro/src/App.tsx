import Header from "./components/Header.tsx";
import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
import Footer from "./components/Footer.tsx";
import Paragraph from "./components/Paragraph.tsx";
import Navigation from "./components/Navigation.tsx";
const myName: string = "Homer Simpson";
function App() {
  return (
    <>
      <Header headerTitle={myName} headerSmall="Mmmmmm....react" />
      <Navigation navHome="Home" navAbout="About" navContact="Contact" />
      <Card
        cardName={`Name: ${myName}`}
        cardOccupationCur="Current occupation: Safety Inspector"
        cardOccupationFor="Former occupation: Nuclear Technician"
      />
      <Button buttonText="More info" />
      <Paragraph paragraphText="Homer Jay Simpson is the protagonist of the American animated sitcom The Simpsons. He is the patriarch of the Simpson family. He and his wife Marge have three children: Bart, Lisa and Maggie." />
      <Footer footerText="742 Evergreen Terrace, Springfield." />
    </>
  );
}
export default App;
