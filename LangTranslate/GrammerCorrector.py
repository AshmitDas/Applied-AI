from happytransformer import HappyTextToText, TTSettings

class GrammarCorrector:
    @classmethod
    def get_corrected_grammar(cls, bad_grammar_sentence):
        happy_tt = HappyTextToText("T5", "vennify/t5-base-grammar-correction")

        args = TTSettings(num_beams=5, min_length=1)

        # Add the prefix "grammar: " before each input 
        result = happy_tt.generate_text("grammar: " + bad_grammar_sentence, args=args)

        return result.text