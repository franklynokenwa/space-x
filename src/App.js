import Header from './components/Header';
import {useEffect, useState} from 'react';
import axios from 'axios'
import Satellite from './components/Satellite'
import HomePageDataContext from './components/HomePageDataContext';

function App() {
  const [homePageData, setHomePageData] = useState([]);
  const [userData, setUserData] = useState()


    useEffect(() => {
      const getData = async () =>{
        await axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(response => {
        console.log('success');
        setHomePageData(response.data)
        console.log(homePageData);

      })
    }

      getData();
      console.log(homePageData);

    }, []); 

  return (
    <HomePageDataContext.Provider value={homePageData}>
      <Header/>
      <Satellite/>
    </HomePageDataContext.Provider>
  );
}

export default App;
