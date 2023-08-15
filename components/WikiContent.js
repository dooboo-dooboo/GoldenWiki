export default function WikiContent({ title, content }) {
    
    return (
        <div>
           <h1 className="middle-x">{title}</h1>
           <h2 className="middle-x">{content}</h2>
        </div>
    )
}