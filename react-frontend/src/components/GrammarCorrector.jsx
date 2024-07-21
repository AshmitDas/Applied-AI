// import axios from "axios";

import { MODELS } from "../Models";

export default function GrammarCorrector({url}) {

    const getCorrectedGrammar = () => {
        let inputText = document.getElementById("inputText").value;
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ "text": inputText }),
            headers: { "content-type": "application/json" }
        }).then(data => data.json()).then(outputText => {
            document.getElementById("outputText").value = outputText.text;
        });
    }


    return (
        <div>
            <h3 className="px-3 my-3">{MODELS.grammarCorrector.name}</h3>
            <div className="d-flex">
                <div className="w-50 px-3">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="inputText" className="form-label h5">Input</label>
                            <textarea className="form-control" id="inputText" rows="10" style={{ resize: "vertical" }}></textarea>
                        </div>
                        <button type="button" onClick={() => getCorrectedGrammar()} className="btn btn-primary">Submit</button>
                    </div>
                </div>

                <div className="w-50 px-3">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="outputText" className="form-label h5">Output</label>
                            <textarea className="form-control" id="outputText" rows="10" style={{ resize: "vertical" }}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}