const messages = [
    "Learn React 💻",
    "Apply the jobs 💼",
    "Invest your new income 🤑"
];

export default function App() {

    const step = 1;

    return ( 
    <>
        <div className="steps">
            <div className="grid">
                <div className="numbers">
                    <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                    <div className={`${step >= 2 ? "active": ""}`}>2</div>
                    <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>

            <p className="message">Step {step}: {messages[step - 1]}</p>

                <div className="buttons">
                    <button className="prev">Previous</button>
                    <button className="next">Next</button>
                </div>
            </div>
        </div>
    </>
    )
}