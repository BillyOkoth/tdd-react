import {useState,useEffect} from 'react';
import apiClient from '../services/apiClient';
function Homes (){
    const [homeState, sethomeState] = useState([])
    useEffect(() => {
        const homesDataPromise =  apiClient.getHomes();
        homesDataPromise.then(homesData=>console.log(homesData) || sethomeState(homesData));    
        return () => {
          }
    }, [])
    let homes;       
    
    homes = homeState.map((home ,index)=>{
        return(
        <div className="col-6 col-md-6 col-lg-4 col-xl-3 mb-3" key = {index} >
            <div data-testid="homes" className="card w-100">
                <img data-testid="homes-image" src={home.image} alt="" className="card-img-top"/>
                <div className="card-body">
                    <div data-testid="homes-title">{home.title}</div>                    
                    <div data-testid="homes-location">{home.location}</div>
                    <div data-testid="homes-price">${home.price}</div>
                </div>
                
            </div>
            
        </div>
        )
    })
              
    return(
        <div className="container m-2">
        <h1>Homes</h1>
        <div className="row">
          { homes }
        </div>
      </div>
    )
}

export default Homes;