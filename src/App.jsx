import OverviewCard from '../OverviewCard';
import './App.css'
import AppHeader from './AppHeader'
import { data } from './data'
import FollowerCard from './FollowerCard';
import { useState } from "react"
import { DarkModeContext } from "./DarkModeContext";


function App() {
  const { followers, overview } = data;
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="App" data-darkmode={darkMode}>
        <AppHeader />
        <section className="grid-4-cols text-center container">
          {followers.map((followerData, index) => {
            return <FollowerCard key={index} followerData={followerData} />
          })}
        </section>

        <section className='container'>
          <h2 className='text-lg' style={{ marginBottom: "1.5rem" }}>
            Overview - Today
          </h2>
          <div className="grid-4-cols grid-overview">
            {overview.map((overviewData, index) => {
              return <OverviewCard overviewData={overviewData} key={index} />
            })}
          </div>
        </section>

        <div className="attribution container">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://qori.dev">Qori El-Hafizh</a>.
        </div>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App
