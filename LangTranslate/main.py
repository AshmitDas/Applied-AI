from flask import Flask, request
from flask_cors import CORS
from json import dumps
from GrammerCorrector import GrammarCorrector
from SentenceSummarizer import SentenceSummarizer

app = Flask(__name__)
CORS(app)

@app.route("/GetCorrectedGrammar", methods=['POST'])
def get_corrected_grammer():
    bad_sentence = request.json["text"]
    corrected_sentence = GrammarCorrector.get_corrected_grammar(bad_sentence)
    return dumps({"text": corrected_sentence})

@app.route("/GetSummarizedText", methods=['POST'])
def get_summarized_text():
    paragraph = request.json["text"]
    summarized_text = SentenceSummarizer.get_summarized_sentence(paragraph)
    return dumps({"text": summarized_text})

if __name__ == "__main__":
    app.run(port=5000, debug=True)