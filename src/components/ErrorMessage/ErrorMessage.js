import './ErrorMessage.css';
import { useEffect } from 'react';
function ErrorMessage(props) {
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
        <div className={`error-message ${props.message && 'error-message_show'} `} onClick={handleCloseMessage}>
            <h2 className='error-message__title'>{props.message}</h2>
        </div>
    );
}
export default ErrorMessage;