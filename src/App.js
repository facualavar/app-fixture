import { BrowserRouter as Router } from "react-router-dom"
import Box from "./components/Box/Box";
import Groups from "./sections/Groups/Groups";
import Routes from "./routes/routes";


const App = () => {
  return (
    <Box backgroundColor="#640F21" width="100vw" height="100vh">
      <Router>
          <Routes />
          <Groups />
      </Router>
    </Box>
  )
}

export default App;
