import './SectionTitle.css'
function SectionTitle(props) {
    return (
        <div className={`section-title`}>
            <h2 className='section-title__heading'>{props.children}</h2>
        </div>
    );
}
export default SectionTitle;