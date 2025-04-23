import ray
from transformers import GPT2LMHeadModel
import torch
from torch.utils.data import DataLoader

import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from preprocessor.tokenizer_worker import tokenize_text

ray.init(address="auto", ignore_reinit_error=True)
model = GPT2LMHeadModel.from_pretrained("gpt2").cuda()


texts = [
    "The universe is a deterministic system.",
    "Buyan is building a P2P training framework.",
]

token_ids = ray.get(tokenize_text.remote(texts))

input_ids = token_ids["input_ids"].cuda()
labels = input_ids.clone()

outputs = model(input_ids, labels=labels)
loss = outputs.loss
loss.backward()
print("loss: ", loss.item())