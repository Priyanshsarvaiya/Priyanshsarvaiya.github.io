---
title: "Why World Models Matter for AGI"
description: "A research note on why prediction, hidden state, and imagined consequences seem important for more general intelligence."
pubDate: 2026-04-29
tags: ["world models", "AGI", "LLMs", "reasoning"]
category: "World Models"
draft: false
---

If you knock over a glass of water, you expect the water to spill before it happens. You do not need to run a physics simulation in your head. You also do not need to have seen that exact glass, on that exact table, from that exact angle. You have some rough expectation about gravity, liquid, surfaces, and what usually follows from pushing objects.

That expectation is a tiny world model.

I do not mean "world model" in a grand or mystical way. At the simplest level, a world model is just a useful internal guess about how some part of the world works. It can be incomplete and still be useful. I know a glass can break if it falls, even though I cannot predict every shard. I know that if I delete a file and then run a script that imports it, something will probably fail. I know that if a model is given a misleading paragraph in a prompt, it might use it even if the paragraph is irrelevant.

These are small expectations about cause and effect. They help with prediction, planning, and noticing surprise.

## A small model of the world

The interesting part is not just knowing facts. It is knowing how facts relate when something changes.

Suppose an AI assistant is helping debug code. It reads an error message, looks at a file, suggests a fix, and then the test output changes. A useful system should update its state: the old error may be gone, the new error may be caused by the patch, and the next step should depend on what changed. If it keeps solving the first error because that is what appeared earlier in the conversation, it is not really tracking the situation.

This is where world models start to matter for agents. An agent is not only answering a question. It is acting in an environment, even if that environment is just a codebase, browser, shell, or database. Actions change things. The model needs some representation of what is currently true, what is uncertain, and what might happen next.

That does not mean the representation has to be explicit, symbolic, or human-readable. It might be distributed across activations. It might be partly stored in text, partly in memory, partly in tools. I am not sure what the right architecture is. But the function seems important: the system has to predict consequences well enough to choose actions.

## What language can teach

LLMs make this question more confusing in an interesting way. They are trained to predict text, but text contains a lot of compressed world knowledge. A model that reads enough language sees descriptions of physics, social situations, programming bugs, scientific experiments, plans, failures, and explanations. It would be surprising if it learned nothing about the world from that.

So I do not like the simple claim that language models have "no world model." That feels too strong. If a model can answer that ice melts in heat, that a key opens a lock, or that a variable must be defined before use, it has learned some structure about how things work.

But I also do not think next-token prediction automatically gives us the kind of world model needed for reliable agents. Language is indirect. Text is written after humans choose what to mention. Many important details are omitted because they are obvious to us. A recipe may say "put the pan on the stove" without explaining heat transfer. A bug report may leave out the real cause. A conversation may contain old assumptions that are no longer true.

This is one reason LLMs can sound like they understand a situation while still losing track of state. They may know the general rule but fail to apply it to the current case. For example, a model can explain object permanence, then still mess up a toy example where a ball moves between boxes over several steps. Or it can explain how a patch should work, then forget that the file was renamed earlier in the same prompt.

The failure is not always lack of knowledge. Sometimes it is failure to maintain the right state.

## Planning needs imagined consequences

Planning is where this becomes more obvious. A plan is not just a list of plausible steps. A plan should contain an implicit story about what each step changes.

If I want to write a blog post, I might first choose a topic, then outline it, then draft it, then revise the unclear parts. Each step changes the state of the work. If the outline is bad, the draft will probably drift. If the title is too broad, the post may become vague. This is a small planning problem, but it still depends on imagining consequences.

For more capable AI systems, the stakes are higher. A research agent might run experiments. A coding agent might edit files. A personal assistant might send messages or schedule meetings. In each case, the system needs to ask something like: if I do this, what will likely happen, what could go wrong, and what evidence would tell me I was wrong?

That last part matters. A world model is useful not only because it predicts. It is useful because surprise becomes meaningful. If the system expected a test to pass and it fails, that mismatch should update the system's beliefs. Without that feedback loop, the model can keep generating confident text around a broken plan.

## An open question

The question I keep coming back to is whether LLMs already learn enough partial world models from text, or whether reliable AGI-like systems need something more direct: interaction, memory, tool feedback, environment training, explicit state tracking, or some combination.

I do not think this is settled. It is possible that scale plus better training will make the internal models much stronger than they are now. It is also possible that language-only training leaves important gaps because the model mostly sees descriptions of consequences, not consequences themselves.

My current intuition is modest: world models matter because intelligence is not only about producing the next good sentence. It is about keeping track of what is true, imagining what might happen, acting, observing the result, and changing your mind when the world disagrees.
