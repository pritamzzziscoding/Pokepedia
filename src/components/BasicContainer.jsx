export const BasicContainer = ({height, weight, experience}) => {
    return <>
        <h3>Basic</h3>
        <div className="basic">
            <div className="status">
                <span>height</span>
                <span>{height}</span>
            </div>
            <div className="status">
                <span>weight</span>
                <span>{weight}</span>
            </div>
            <div className="status">
                <span>experience</span>
                <span>{experience}</span>
            </div>
        </div>
    </>
}