import React,{useContext} from 'react'
import HomePageDataContext from './HomePageDataContext';
import StyledSatellite from '../styles/Satellite.styled';


const Satellite = () => {
    const homePageData = useContext(HomePageDataContext)
  return (
      homePageData.map((item) => {
          const {mission_name,mission_id, launch_year, links, launch_success, launch_landing} = item;
          console.log(launch_success);
          return (
            <StyledSatellite>
                <div> 
                  <img src={links.mission_patch_small} alt="" />
                </div>
                <div>
                  <p>Name <span>{mission_name}</span></p>
                  <p>Mission Ids {mission_id.map((id) => <span>{id}</span>)} </p>
                  <p>Launch Year <span>{launch_year}</span></p>
                  <p>Successful Launch <span>{launch_success}</span></p>
                  <p>Successful Landing <span>{launch_landing}</span></p>
                </div>
            </StyledSatellite>
          )
      })
  )
}

export default Satellite