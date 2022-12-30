import Movie from "../images/movie.png";
import Note from "../images/note.png";
import Password from "../images/password.png";
import Scheduler from "../images/scheduler.png";
import Srvr from "../images/srvr.png";
import Tech from "../images/tech.png";
import Weather from "../images/weather.png";

const projects = [
    {
        image: Srvr,
        title: "Srvr",
        desc: "A fullstack, punny point-of-sale applicaiton for restrauant workers, utilizing the MVC paradigm.",
        site: "https://rocky-thicket-19978.herokuapp.com/",
        github: "https://github.com/ObviousEcho/Srvr"
    },
    {
        image: Tech,
        title: "Tech-Blog",
        desc: "A CMS-style blog allowing developers to write about tech, post thoughts, and comment.",
        site: "https://nameless-bayou-61480.herokuapp.com/",
        github: "https://github.com/ObviousEcho/Tech-Blog"
    },
    {
        image: Weather,
        title: "Weather Dashboard",
        desc: "Search weather forcasts and save favorites for any city using the Open Weather API.",
        site: "https://obviousecho.github.io/weather-dashboard/",
        github: "https://github.com/ObviousEcho/weather-dashboard"
    },
    {
        image: Scheduler,
        title: "Work-Day-Scheduler",
        desc: "Store todo events for specific hours of the day.  Each hour is color coded indicationg past, current, or future.",
        site: "shttps://obviousecho.github.io/work-day-scheduler/",
        github: "https://github.com/ObviousEcho/work-day-scheduler"
    },
    {
        image: Note,
        title: "Note taker",
        desc: "Create, store, and delete notes!  Built with Node.js using an Exrpess server.",
        site: "https://blooming-ridge-50621.herokuapp.com/notes",
        github: "https://github.com/ObviousEcho/note-taker"
    },
    {
        image: Movie,
        title: "Movie Buff",
        desc: "Search for movies and review using third party Api's.  Save movies to your watch list for later.",
        site: "https://obviousecho.github.io/movie-buff/",
        github: "https://github.com/ObviousEcho/movie-buff"
    },
    {
        image: Password,
        title: "Password Generator",
        desc: "Generate random and secure passwords by answering a series of user prompts.",
        site: "https://obviousecho.github.io/password-generator/",
        github: "https://github.com/ObviousEcho/password-generator"
    }
];

export default projects;