export function ErrorMessage({ message }) {
    return (
        <div className="error_msg_block">
            <h1 className="error_title">Ошибка</h1>
            <p className="error-message">{message}</p>
        </div>
    );
}
