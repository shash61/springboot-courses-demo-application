import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Courses from "./components/courses/Courses";
import React from "react";
import axios from "axios";

export const CoursesContext=React.createContext()
function App() {
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/courses", {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(res.data);
        setCourses(res?.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    
    <CoursesContext.Provider value={{setCourses, setLoading}}>
    <div className="">
      {/* header */}
      <Header />
      {loading ? <p>Loading....</p> : <Courses courses={courses} />}
    </div>
    </CoursesContext.Provider>
  );
}

export default App;
