import ray
from transformers import GPT2Tokenizer

ray.init(address='auto')
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

@ray.remote
def tokenize_text(texts):
    return tokenizer(texts, return_tensors="pt", padding=True, truncation=True)
