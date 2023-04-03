import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId='933435255873-pjvabg0f1rln77mh6raval4md76nqfai.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>


      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
