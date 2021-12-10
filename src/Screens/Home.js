import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import {
  auth,
  onAuthStateChanged,
  // database,
  // onChildAdded,
  // child,
  // ref,
  // push,
  // update,
  // set,
} from "../Config/FirebaseConfig";
import { useNavigate } from "react-router";
import MuiAppBar from "../Components/Navbar";
import { DELETE_DATA } from "../Config/Redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(false);

  const myState = useSelector((state) => state.setTheData);
  const dispatch = useDispatch();

  const { type, obj } = myState;
  console.log(obj);

  const navigate = useNavigate();
  // const location =useLocation()
  // console.log(location.state);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoggedIn(false);
        setLoading(false);
      } else {
        setLoading(false);
        setUserAuth(true);
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {loading ? (
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
              {!obj ? null : (
                <>
                  {userAuth ? (
                    <>
                      <h3>{obj.userName}</h3>
                      <h3>{obj.email}</h3>
                      <h3>{obj.cnic}</h3>
                      <h3>{obj.country}</h3>
                      <h3>{obj.pNumber}</h3>
                      <button onClick={() => dispatch(DELETE_DATA())}>
                        delete
                      </button>
                    </>
                  ) : null}
                </>
              )}
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
