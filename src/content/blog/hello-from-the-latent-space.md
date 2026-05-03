---
title: "First Blog: Hello from the Latent Space"
description: "A small note on why I am starting this blog and what I want to write about."
pubDate: 2026-04-05
tags: ["AI", "LLMs", "AGI", "research notes"]
category: "Research Notes"
draft: false
---

I've been thinking to start a blog for a long time.

Not in any dramatic way. More like one of those things that stays in the back of your head for months. I read something interesting, I think “I should write about this,” then I save link, make some notes, and never see it again.

So this is me finally starting.

I don't want this blog to be portfolio page or polished publication. I already have site for that. I want this to be more like a public voice: a place where I can write down what I am learning, what I am confused about, and what I keep thinking about when I read papers or build projects.

Most of the writing here will probably be about AI, LLMs, World Models, AGI, long-context reasoning, and amodel failures. Those are the topics I keep coming back to.

## Why write a blog?

The reason is that notes are easy to lost. I sometimes leave thoughts unfinished when I write just for myself. I write an overview or underline a paragraph to persuade myself that I understand it. However, it's different to explain things in public. It makes me think and consider whether I truly comprehend this or whether I'm just seeing it.

This is especially true with AI.

Many concepts, including as reasoning, agents, memory, world models, AGI, alignment, robustness, and safety, are used in a fairly general manner. Sometimes terms seem obvious until you try to define them. After then, things become messy.

I believe it is worthwhile to write about messiness.

I don't want each piece to come out as a definitive assertion. It's likely that some blogs will be more along the lines of "here is my current understanding." Notes written on paper could be among them. Some may be reactions to model behavior. Some may relate to studies I'd like to conduct but haven't quite thought out yet.

That's alright. Instead of waiting until I am fully prepared, I would prefer to write honestly while I am still learning.

## What I'm currently working on

One question I keep thinking about is how language models behave when the context gets noisy.

It is easy to be impressed by long context windows. A model can take thousands or even millions of tokens, so it feels like we solved memory. But having text in the context is not the same as using it correctly.

If the answer is hidden inside a long prompt, can the model find it?  
If there are irrelevant facts around it, can the model ignore them?  
If there are misleading but related details, does the model get distracted?  
At what point does more context stop helping and start hurting?

That last question is especially interesting to me.

Humans deal with this all the time. If someone gives you a clean problem, it is easier to solve. If they give you the same problem buried inside pages of irrelevant information, your chance of making a mistake goes up. You may focus on the wrong detail. You may forget the actual question. You may combine facts that were never supposed to be combined.

Although the precise failure pattern is unclear, I believe something similar occurs with LLMs.

Models can sometimes effectively ignore irrelevant information. They may hold on to it at times. Occasionally, they respond with the correct response, but for the incorrect reason. Sometimes the explanation sounds confident even when the reasoning was shaky.

One of the things I want to learn more about is the difference between flawless output and reliable thought processes of model.

## Regarding AI and larger chatbots

AGI interests me as well, however I have to be careful when using that term.

It is easy to make AGI sound either magical or meaningless. I do not want to do either. I do not think general intelligence is just “chatbot that knows more things.” Chat is an interface. It is not the whole system.

A model can talk about plans without being good at carrying them out. It can explain how to debug code without reliably tracking the actual state of the codebase. It can summarize a paper while missing the part that matters most. It may appear to fully understand a task while subtly ignoring one of the limitations.

That does not mean current models are useless. They are obviously useful. I use them, I learn from them, and I think they are one of the most important technologies to study right now.

But usefulness is not the same as general intelligence.

I would expect a system to handle state, memory, feedback, uncertainty, planning, or errors more effectively than most existing chat-based systems in order to seem more general. Scaling won't fix it. Perhaps improved world models, training sets, agents, or tools will be crucial.

That uncertainty is part of why I want to write.

## What this blog will be

I do not have a perfect plan for this blog yet.

I'll usually write about papers I've read, ideas I'm trying to understand, experiments I'm considering, or viewpoints that might differ in the future. Posts may be brief at times. Some may be more technical. Some may have minor errors, which I aim to identify and fix over time.

The main goal is consistency.

My goal is to improve my ability to articulate technical concepts in my own words. I wish to develop the habit of thinking clearly in public. Additionally, I want a place where my ideas for AI research don't just vanish into haphazard notes and incomplete papers.

So this is the first post.

Nothing fancy. Just a starting point.