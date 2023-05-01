import "./title.css";

export default function Title({title, text}) {
    return (
        <div className="container">
            <div className="pricing-header   mx-auto text-center">
                <h1 className="display-4">{title}</h1>
                <p className="lead-1">{text}</p>
            </div>
        </div>
    )
}