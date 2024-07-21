from transformers import pipeline

class SentenceSummarizer:
    @classmethod
    def get_summarized_sentence(cls, input_sentence):
        summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

        summarized_text = summarizer(input_sentence, max_length=130, min_length=30, do_sample=False)[0]['summary_text']

        return summarized_text
