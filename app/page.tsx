import Community from "./component/Community";
import CommunityProject from "./component/CommunityProject";
import DevoloperList from "./component/DevoloperList";
import Footer from "./component/Footer";
import WelcomePage from "./component/WelcomePage";

export default function Home() {
  return (
    <main>
      <WelcomePage />
      <Community />
      <CommunityProject />
      <DevoloperList />
      <Footer />
    </main>
  );
}
