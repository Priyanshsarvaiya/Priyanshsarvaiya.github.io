---
title: "Are LLMs Reasoning or Pattern Matching?"
description: "A more careful way to think about the reasoning debate: not whether patterns exist, but when they generalize and when they break."
pubDate: 2026-04-24
tags: ["LLMs", "reasoning", "intelligence"]
category: "LLMs"
draft: false
---

People often use "pattern matching" as an insult when talking about LLMs. The idea is that the model is not really reasoning, it is just matching the prompt to something it has seen before and producing a familiar-looking answer.

There is some truth in that. There are plenty of cases where a model gives the answer that fits the surface pattern, not the actual problem. But I also think the phrase can hide more than it explains. Human reasoning uses patterns too. When I see a math problem, I look for familiar structure. When I debug code, I compare the error to bugs I have seen before. When I read an argument, I recognize shapes like contradiction, analogy, missing assumption, or circular reasoning.

So the interesting question is not whether LLMs use patterns. Of course they do. The question is whether the patterns are robust enough to support reasoning in situations that are new, slightly shifted, or full of irrelevant detail.

## Patterns are not the enemy

A shallow pattern is something like: "This problem mentions trains, so use the usual train-word-problem formula." That can fail quickly if the wording changes or if there is a trick. A deeper pattern is more like: "There are two quantities changing over time, I need to write down their relationship and solve for the unknown." That is still a pattern, but it is a useful abstraction.

LLMs seem to learn both kinds. This is why they can be impressive and frustrating in the same session.

For example, a model can help debug code by reading an error message, inspecting a function, and noticing that a value can be `undefined`. That looks like reasoning. It is using evidence from the current context and connecting it to a possible cause. But the same model might also hallucinate an API method because the method name sounds plausible. In one case it tracks the actual problem. In the other, it completes the style of a solution.

Math word problems show the same tension. A model may solve a clean problem step by step, then fail when a small condition is added: "Alice gives back two apples before the final count" or "the question asks for the number remaining, not the number used." The explanation can still look neat. It may even include equations. But if the model did not track the changing state, the explanation is mostly decoration.

That is the part that worries me most: reasoning-looking text is cheap for language models. Actual state tracking is harder.

## Explanations can be convincing and wrong

Step-by-step reasoning helps in many cases, but it is not magic. Sometimes the steps are a real working memory. Sometimes they are a story written after the answer has already been guessed.

I notice this most in long-context questions. Suppose the prompt contains several documents and asks a specific question. The relevant answer is in document 3, but document 7 contains a similar phrase that points in the wrong direction. A model might produce a confident answer using document 7 because it feels semantically close. If asked to explain, it may cite the wrong passage smoothly.

That does not mean the model is incapable of reasoning. It means the evaluation has to check whether the reasoning is grounded in the right evidence. A polished explanation is not enough.

Code is another useful example. If a model proposes a patch, the real test is not whether the explanation sounds good. The test is whether the code builds, the tests pass, and the patch respects constraints from the repo. A model can write a beautiful explanation for a change that breaks an import. The environment is less impressed by fluency than we are.

This is why I like tasks where the answer has to survive contact with something external: a compiler, a unit test, a theorem checker, a database query, or a carefully constructed counterexample.

## Where the reasoning breaks

I do not think the useful question is "Do LLMs reason?" It is too broad. The answer changes depending on the task, prompt, model, tools, and amount of noise in the context.

A better question is: when does the reasoning break?

Does it break when the problem is longer? When an irrelevant paragraph is inserted? When two facts are far apart? When the final answer requires rejecting a tempting but false clue? When the model has to revise an earlier assumption? When the problem is phrased in a way that does not match common examples from training?

These questions feel more researchable. They also avoid the vague philosophical fight. I do not need to decide whether the model "understands like a human" to test whether it can track a variable through ten transformations or ignore a misleading piece of context.

My current view is that LLMs can perform behaviors that deserve to be studied as reasoning, but the behavior is uneven. Sometimes the model is doing something close to problem solving. Sometimes it is leaning on brittle templates. Often it is hard to tell from the final answer alone.

That is why evaluation matters so much. If a benchmark only rewards the final string, it may miss the difference between correct reasoning and lucky completion. If it includes counterexamples, distractors, tool feedback, and shifted versions of the same task, we learn more.

The phrase "pattern matching" is not wrong, but it is too blunt. The real issue is whether the learned patterns are shallow shortcuts or useful abstractions, and how quickly they fall apart when the context stops being clean.
