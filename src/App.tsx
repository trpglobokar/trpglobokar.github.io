import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

import "./fonts.css";
import "./App.css";

const outerTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#9E4770",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: "#FBFBFB",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FBFBFB",
    },
    // error: will use the default color
  },
  typography: {
    fontFamily: [
      "Dosis",
      "Raleway",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const App: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const ContentToRender = [
    <Home />,
    <div className="Content">
      <div className="InnerContent">
        <Projects />
      </div>
    </div>,
    <div className="Content">
      <div className="InnerContent">
        <About />
      </div>
    </div>,
  ];

  return (
    <ThemeProvider theme={outerTheme}>
      <nav className="Menu">
        <img
          className="MenuIcon"
          src={require("./static/pig-icon.png")}
          alt="Logo of a pig"
        />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation menu"
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="About" />
        </Tabs>
      </nav>
      {ContentToRender[value]}
    </ThemeProvider>
  );
};

export default App;
