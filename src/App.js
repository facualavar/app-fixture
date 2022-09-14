import { BrowserRouter as Router } from "react-router-dom"
import Box from "./components/Box/Box";
import Routes from "./routes/routes";
import alertContext from "./contexts/alertContext"
import AlertTop from "./components/AlertTop/AlertTop";
import useAlert from "./hooks/useAlert";

const App = () => {
  const alertInitial = useAlert()

  return (
    <Box backgroundColor="#640F21" width="100vw" height="100vh">
      <alertContext.Provider value={alertInitial}>
        <Router>
            <AlertTop />
            <Routes />
        </Router>
      </alertContext.Provider>
    </Box>
  )
}

export default App;
