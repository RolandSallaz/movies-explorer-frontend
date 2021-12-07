import './TimeLine.css';
function TimeLine(props) {
    return (
        <div className='timeline'>
            <div className='timeline__container'>
                <p className='timeline__period-title timeline__period-title_style_green'>1 неделя</p>
                <p className='timeline__tech-title'>Back-end</p>
            </div>
            <div className='timeline__container'>
                <p className='timeline__period-title'>4 недели</p>
                <p className='timeline__tech-title'>Front-end</p>
            </div>
        </div>
    )
}
export default TimeLine;