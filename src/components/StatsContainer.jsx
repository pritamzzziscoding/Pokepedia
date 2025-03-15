export const StatsContainer = ({stats}) => {
    return <>
        <h3>Stats</h3>
        <div className="stats">
            {
                stats.map((stat, idx) =>{
                    return <div key={idx} className="stat">
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                    </div>
                })
            }
        </div>
    </>
}