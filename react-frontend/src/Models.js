import GrammarCorrector from "./components/GrammarCorrector";
import TextSummarizer from "./components/TextSummarizer";

export const MODELS = {
    grammarCorrector: {
      name: "Grammar Corrector",
      view: <GrammarCorrector url={"http://127.0.0.1:5000/GetCorrectedGrammar"} />
    },
    textSummarizer: {
      name: "Text Summarizer",
      view: <TextSummarizer url={"http://127.0.0.1:5000/GetSummarizedText"} />
    }
  }