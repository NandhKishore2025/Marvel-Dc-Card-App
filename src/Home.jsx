import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import './Home.css'

function Home() {
    const [heroes, setHeroes] = useState([])
    const navigate = useNavigate();
    const [search , setSearch] = useState('')
    const [sortby ,setSortBy] =  useState('name')
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            const result = await fetch("https://akabab.github.io/superhero-api/api/all.json")
            const json = await result.json()
            console.log(json)
            setHeroes(json)
        }
        fetchdata()

    }, [])

    const filterhero = heroes.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))

    const sorted  = filterhero.sort((a,b) => {
        let result;
        if(sortby === "name") {
            result = a.name.localeCompare(b.name)
        } else {
            result = b.powerstats[sortby] - a.powerstats[sortby] 
        }
        return isAscending ? result : -result;
    })

    return (
        <div className="app">
                <h1 className="app-title">Hall Of Fame</h1>
            <input
               placeholder = "search your hero"
                value = {search}
                onChange = {e  => setSearch(e.target.value)}
                
               />
               <button className='btn2' onClick={() => setIsAscending(!isAscending)}>
    {isAscending ? "Sort: High to Low" : "Sort: Low to High "}
</button>

               <select  className='select' value = {sortby} onChange = {e =>setSortBy(e.target.value)}>
                <option value = "name">Name</option>
                <option value = "strength">Strength</option>
                <option value = "speed">Speed</option>
                <option value = "combat">Combat</option>
                <option value = "intelligence">Intelligence</option>
                <option value = "power">Power</option>
                <option value = "durability">Durability</option>
               </select>
               <div className='click'>
            {sorted.map(hero => (
                <div key={hero.id} onClick = {() => navigate(`/hero/${hero.id}`,{state : hero})}>
                    <h2>{hero.name}</h2>
                    <img
                        src={hero.images.sm}
                        alt={hero.name}
                        width={100}
                    />
                </div>
            ))}

            </div>
        </div>
    )
}

export default Home;