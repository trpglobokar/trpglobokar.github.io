import Grid from "@mui/material/Grid";
import React from "react";

import "./About.css";

const About: React.FunctionComponent = () => {
  return (
    <div>
      <h1>About</h1>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={5}>
          <img
            className="ProfileImage"
            alt="hey it's me"
            src={require("./static/profile.jpg")}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <p>
            I've been coding since elementary school, ever since I discovered I
            could attach a custom function to a button and make it yell at the
            user for clicking it. Since then, the complexity (and helpfulness)
            of the systems I've worked on has increased, but I like to think the
            basic principles remain the same.
          </p>
          <p>
            I'm a front end developer who believes in the power of interactivity
            to increase user engagement with whatever product they're using,
            especially in the field of data visualization. If it exists in table
            form, it can be transformed.
          </p>
          <p>
            In my free time, I enjoy swing dancing, volunteering at Books to
            Prisoners, and writing magic-filled fantasy stories.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
