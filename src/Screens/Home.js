import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import {
  auth,
  onAuthStateChanged,
  signOut,
  // database,
  // onChildAdded,
  // child,
  // ref,
  // push,
  // update,
  // set,
} from "../Config/FirebaseConfig";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import MuiAppBar from "../Components/Navbar";
import { useLocation } from "react-router";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const[userAuth,setUserAuth]=useState(false);

  const navigate = useNavigate();
  const location =useLocation()
  console.log(location.state);

  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("working");
        setLoggedIn(false);
        setLoading(false);
      } else {
        setUserAuth(true)
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {!location.state ? (
          <CircularProgress />
          ) : (
            <>
            <MuiAppBar />
            <h1>Home</h1>
            <Box>
              {loggedIn ? null : (
                <>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" sx={{ margin: "5px" }}>
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" sx={{ margin: "5px" }}>
                      SignUp
                    </Button>
                  </Link>
                </>
              )}
              {
                userAuth?<><h3>
                {location.state.userName}
              </h3>
              <h3>
                {location.state.email}
              </h3>
              <h3>
                {location.state.cnic}
              </h3>
              <h3>
                {location.state.country}
              </h3>
              <h3>
                {location.state.pNumber}
              </h3></>:null
              }
              
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
