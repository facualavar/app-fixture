import Box from "./components/Box/Box";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar.js/Navbar";
import Groups from "./sections/Groups/Groups";

const App = () => {
  return (
    <Box backgroundColor="#640F21" width="100vw" height="100vh">
      <Groups />
    </Box>
  )
}

export default App;
