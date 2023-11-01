export interface Project {
  title: string;
  description: string;
  conceptsExplored: string;
  techUsed: string;
  repoName: string;
}

export const projects: Project[] = [
  {
    title: "Movie Picker",
    conceptsExplored: "RESTful API, User Selections, State Management",
    techUsed: "React, Material UI, Styled Components",
    description:
      'Queries themoviedb.org for a list of user selected movies, then allows said user to filter movies by site rating and genre. If user still cannot decide what to watch, a "Choose for Me" button selects one movie from remaining valid movies.',
    repoName: "movie-picker",
  },
  {
    title: "Habit Calendar Maker",
    conceptsExplored: "User Customization, State Management",
    techUsed: "React, Typescript, Redux",
    description:
      "Creates a customizable, printable calendar for tracking habits and/or chores.",
    repoName: "habit-calendar-maker",
  },
  {
    title: "PokeTypes",
    conceptsExplored: "Visualization, Data Manipulation",
    techUsed: "d3, JSON, React, Styled Components",
    description:
      "From json list, renders all Pokemon by type, and allows users to see relationships between the various types (i.e. which are the most common, which have the most hybrids).",
    repoName: "poketypes",
  },
  {
    title: "Water World",
    conceptsExplored: "Visualization, Custom Shape File Creation",
    techUsed: "GeoJSON, Leaflet, MapShaper, React, Material UI",
    description:
      "Renders topographic map which allows user to explore what the world would look like if the sea level rose in increments of 800 feet.",
    repoName: "water-world",
  },
];
