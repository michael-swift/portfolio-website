---
layout: post
title: "PedalBored: Distorting Lyrics Like Guitar Pedals Distort Sound"
date: 2025-06-14
categories: [natural-language-processing, computational-creativity, music-informatics]
tags: [transformer-models, semantic-drift, lyrical-analysis, computational-linguistics, machine-translation, python]
---

*What if we applied cascaded neural language transformations to lyrics like a distortion pedal modifies audio signals?*

![PedalBored Concept](/images/posts/pedal_tinkering_illustration.png)

Guitar pedals transform signals in unpredictable and rewarding ways - could we do the same with lyrics? This idea occurred to me about 6 years ago when implementing a Naive Bayes classifier for text classification during my first computational statistics course. I said I would circle back -- well here. the fuck. I am.

Back. 

Except now I'm leveraging large-scale transformer architectures instead of simple probabilistic models. And now with Claude Code I can just do things.

![Lyric Operator Pedal](/images/posts/lyric_operator_pedal.png)

## How It Works

![PedalBored Flow Diagram](/images/posts/pedalbored_flow_diagram.svg)

**Light Distortion** applies sequential machine translation across multiple target languages. Each language exhibits distinct semantic constraints and syntactic structures, inducing gradual semantic drift with each translation step. Like running audio through a chain of signal processors.

**Heavy Distortion** first performs translation to a target language, then applies masked language modeling in that linguistic context, forcing the transformer to perform contextual inference within non-English semantic space. The text then continues through additional translation hops, accumulating both translation artifacts and language-specific idiomatic influences.

## Example 1: Kitchen Light

A transformer model generated a simple test text exploring themes of domestic transgression

<table class="comparison-table">
  <tr>
    <th>Original</th>
    <th>Light Distortion</th>
    <th>Heavy Distortion</th>
  </tr>
  <tr>
    <td>
      Kitchen light spills yellow into the night<br>
      The freezer door hangs open wide<br>
      These small rebellions I've designed
    </td>
    <td>
      The kitchen is flooded with yellow light at night.<br>
      The door of the freezer has been left open.<br>
      My small act of resistance.
    </td>
    <td>
      The warm yellow glow of the kitchen light.<br>
      The freezer door remains wide open.<br>
      Those foods I have forgotten.
    </td>
  </tr>
</table>

The semantic drift is evident: "small rebellions I've designed" undergoes lexical formalization to "small act of resistance" (maintaining semantic coherence), then experiences complete conceptual divergence to "foods I have forgotten" (preserving only the spatial context while losing intentionality).

## Example 2: Like a Rolling Stone (Verse 1)

Dylan's classic opening verse, increasingly scrambled.

<table class="comparison-table">
  <tr>
    <th>Original</th>
    <th>Light Distortion</th>
    <th>Heavy Distortion</th>
  </tr>
  <tr>
    <td>
      Once upon a time you dressed so fine<br>
      Threw the bums a dime in your prime, didn't you?<br>
      ...<br>
      Like a complete unknown, like a rolling stone
    </td>
    <td>
      You used to be very chic, didn't you?<br>
      At the peak of your time, you even threw 10 cents to beggars...<br>
      Like a stranger, like a rolling stone
    </td>
    <td>
      You were once so well dressed<br>
      You gave a ten-franc piece to the beggars...<br>
      Like a boat without a rudder, like a rolling leaf
    </td>
  </tr>
</table>

My favorite transformation: "like a rolling stone" → "like a boat without a rudder, like a rolling leaf". The cascaded translation process generated novel metaphorical constructions that preserve the semantic essence of directionless motion while introducing maritime and botanical imagery.


## Try It Yourself

```python
from pedalbored import language_chain, mutate_words_mask, AnthropicTranslator

# Light distortion
light = language_chain(
    lyrics="Your text here",
    languages=["French", "Japanese", "German"]
)

# Heavy distortion: translate first, then apply masked language modeling in target language
translator = AnthropicTranslator()
french_text = translator.translate("Your text here", "English", "French")
masked_french = mutate_words_mask(french_text, {"mask_probability": 0.6})
heavy = language_chain(
    lyrics=masked_french,
    languages=["Japanese", "German"],  # Continue from French
    translator=translator
)
```

## Is This Useful?

Probably not in any utilitarian sense. But neither are my 4 delay pedals. Sometimes you need your words to undergo stochastic transformation and return semantically altered. I imagine one could optimize this through prompt engineering, translation chain length, masking probability tuning, etc. and generate more compelling lyrical variations than what I've demonstrated. Maybe if some young computational artist looking to break into the music industry picked up on this approach they could really innovate.

Or maybe I just wanted to name something "PedalBored."

---

*PedalBored is open source. Turn the knobs, see what happens.*