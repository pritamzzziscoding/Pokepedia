import { BasicContainer } from "./BasicContainer"
import { ImageContainer } from "./ImageContainer"
import { NameContainer } from "./NameContainer"
import { StatsContainer } from "./StatsContainer"
import { TypeContainer } from "./TypeContainer"

export const Cards = ({freshData}) => {
    return <div className="card">
        <ImageContainer picture={freshData.picture}/>
        <NameContainer name={freshData.name}/>
        <TypeContainer types={freshData.types}/>
        <BasicContainer height={freshData.height} weight={freshData.weight} experience = {freshData.experience}/>
        <StatsContainer stats={freshData.stats}/>
    </div>
}