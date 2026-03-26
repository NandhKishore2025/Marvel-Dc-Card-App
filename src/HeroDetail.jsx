import {useLocation, useNavigate} from 'react-router-dom';
import './HeroDetail.css'
function HeroDetail(){

   
    const {state : hero}= useLocation()
    const navigate = useNavigate();
    

    if(!hero)  return <p>Wait for the Hero</p>
    return(
       
       <div className = "detail">
            <h2>{hero.name}</h2>
             
            <img src ={hero.images.md} alt ={hero.name} />
            <p className='fullname'>Full Name : {hero.biography.fullName}</p>
            <br/>
            <p className='publish'> Publisher: {hero.biography.publisher}</p>
            <h1>PowerStats</h1>
            <div className ="stats">
                <p>Intelligence : {hero.powerstats.intelligence}</p>
                <p>Strength : {hero.powerstats.strength}</p>
                <p>Speed : {hero.powerstats.speed}</p>
                <p>Power : {hero.powerstats.power}</p>
                <p> Durability : {hero.powerstats.durability}</p>
                <p>Combat : {hero.powerstats.combat}</p>
               
            </div>
    
            <button className='back_btn' onClick = {() => navigate("/")}> Back</button>
        </div>
    )

}

export default HeroDetail;