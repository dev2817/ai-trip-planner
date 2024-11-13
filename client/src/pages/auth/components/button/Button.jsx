import "./Button.css"

export default function Button({ name, onClick }) {
    return (
        <div className="button-container">
            <button className="btn" onClick={onClick}>{name}</button>
        </div>
    )
}
