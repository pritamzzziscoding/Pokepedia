import { useEffect, useState } from "react"
import { Cards } from "./components/Cards"
import { Heading } from "./components/Heading"
import { InputField } from "./components/InputField"

export const App = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=386"

  //Controlling Input and Data Field
  const [pokemon, setPokemon] = useState("")
  const [list, setList] = useState([])
  const[loading, setLoading] = useState(true)
  //Using useEffect Hook for controlling the side efects of api fetch

  function matchExpr(str1, str2) {
    let i = 0, j = 0;

    while (j < str2.length) {
      if (i < str1.length && str1[i].toLowerCase() === str2[j]) {
        i++;
      }
      j++;
    }
    return i === str1.length;
  }

  const getPokemon = async (api_end_point) => {
    let res = await fetch(api_end_point)
    let data = await res.json()
    return data
  }

  const getPokemonList = async () => {
    try {
      let res = await fetch(API)
      let data = await res.json()
      let dataList = data.results.filter((currPokemon) => {
        return matchExpr(pokemon, currPokemon.name)
      })

      let newList = await Promise.all(
        dataList.map(async ({ name, url }) => {
          return await getPokemon(url)
        })
      )
      setList(newList)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonList()
  }, [pokemon])

  if(loading){
    return <h1 className="text-6xl m-10">Loading...</h1>
  }

  return <div className="content flex flex-col items-center gap-5">
    <Heading />
    <InputField pokemon={pokemon} setPokemon={setPokemon} />
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">{
      list.map((data) => {
        const freshData = {
          name: data.name,
          experience : data.base_experience,
          weight : data.weight,
          height : data.height,
          types : data.types,
          stats : data.stats,
          picture : data.sprites.other.home.front_default
        }
        return <Cards key={data.id} freshData={freshData} />
      })
    }</div>
  </div>
}