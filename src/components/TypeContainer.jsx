export const TypeContainer = ({types}) => {
    return <>
        <h3>Type</h3>
        <div className="type">
            {
                types.map((curr, idx)=>{
                    return <div key={idx} className={curr.type.name}>{curr.type.name}</div>
                })
            }
        </div>
    </>

}