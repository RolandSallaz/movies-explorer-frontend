import './InfoTool.css';
import { useEffect } from 'react';
function InfoTool(props) {
    const handleCloseMessage = () => {
        props.onCloseClick();
    }
    useEffect(() => {
        const closeTimer = () => setTimeout(handleCloseMessage, 6000);
        const timerId = closeTimer();
        return () => {
            clearTimeout(timerId);
        };
    });
    return (
        <div className={`info-tool ${props.message.text && 'info-tool_show'} `} onClick={handleCloseMessage}>
             <h2 className={`info-tool__title ${props.message.error&&'info-tool__title_type_error'}`}>{props.message.text}</h2>
         </div>
     );
 }
export default InfoTool;