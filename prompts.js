const fontsString =
  "Bungee, Chakra Petch, Climate Crisis, Codystar, Creepster, DM Serif Display, Faustina, Grape Nuts, Inter, Inter Tight, JetBrains Mono, M PLUS Code Latin, Mukta, Noto Sans, Odibee Sans, Open Sans, Orbitron, Pirata One, Roboto, Roboto Slab, Rubik, Rubik Doodle Shadow, Rubik Mono One, Share Tech, Share Tech Mono, Source Code Pro, Titillium Web, Ubuntu, Ubuntu Mono, Yanone Kaffeesatz, Zilla Slab Highlight";
const fontsList = fontsString.split(", ");

const topicPromptsFun = [
  "create an animated p5.js sketch and integrate it in the website",
  "Relate the topic to cats",
  "Relate the topic to pens",
  "relate the topic to vampires",
  "use as many colors as possible",
  "Take a religious spin on the topic",
  "Write the content in the language of Donald Trump",
  'Create a delightful and child-friendly one-page website. Design an engaging website suitable for children of various ages. Start with a whimsical and inviting title that captures the essence of the theme. Include a brief introduction to the topic, highlighting their playful and entertaining nature. Organize the content into sections such as "A Story," "Fun Facts," and "10 Funny Names" all relating to the topic. Design the website with vibrant and cheerful colors, incorporating cartoonish elements to make it visually appealing for children. Use friendly and easy-to-read fonts. Consider adding interactive elements like buttons or simple games to enhance engagement. Remember to maintain simplicity in navigation and layout, ensuring that children can easily explore the content.',
  "Create a charming and informative one-page website dedicated to the topic, tailored for older ladies. Craft an elegant and welcoming title that resonates with a mature audience. Begin with a warm introduction, highlighting the joy and companionship that the topic can bring to older individuals. Ensure the website is user-friendly with simple navigation and an intuitive layout.",
  "Write the content as if it were a hardboiled noir detective narrating the topic",
  "Write the content as an overly enthusiastic infomercial selling the topic",
  "Write the content as a formal scientific abstract, then undercut it with a silly footnote",
  "Write the content as a pirate explaining the topic to their crew",
  "Write the content as a medieval fairy tale about the topic",
  "Write the content as breathless sports commentary about the topic",
  "Write the content as a dating profile bio for the topic",
  "Write the content as a corporate keynote full of buzzwords about the topic",
  "Write the content as a conspiracy theorist who is clearly having fun, not serious",
  "Write the content as a yoga and wellness retreat description centered on the topic",
  "Write the content in Shakespearean English",
  "Write the content as an over-the-top true-crime documentary narrator describing the topic",
  "Relate the topic to houseplants",
  "Relate the topic to outer space",
  "Relate the topic to a specific fictional decade in the far future",
  "Include a short quiz with 3 questions about the topic",
  "Include a fictional interview with an expert on the topic",
  "Sometimes add way too much information, going off on tangents",
  "Write the content as a wrestling match hype reel, building the topic up like a championship showdown",
  "Write the content as a bewildered grandma explaining the topic to her grandchildren, getting little details charmingly wrong",
  "Write the content as an alien anthropologist encountering the topic for the very first time and documenting it with wide-eyed confusion",
  "Write the content as a heist movie trailer, treating the topic like the target of an elaborate crew's master plan",
  "Write the content as a game show host revealing the topic behind door number three with maximum suspense",
  "Write the content as an over-caffeinated podcast host who keeps going on wild tangents about the topic",
  "Write the content as a nature documentary narrator describing the topic with the hushed, dramatic reverence usually reserved for lions on the savanna",
  "Write the content as a soap opera plot recap, full of betrayal, twists, and cliffhangers about the topic",
  "Write the content as the liner notes of a heavy metal concept album inspired by the topic",
  "Write the content as a breaking news bulletin interrupting regular programming for an urgent update about the topic",
  "Write the content as a fortune teller reading tarot cards to reveal the mystical truth about the topic",
  "Write the content as a group chat between overexcited friends who just discovered the topic",
  "Write the content as a scandalous Victorian-era gossip column about the topic",
  "Write the content as an origin story for a superhero whose powers are directly inspired by the topic",
  "Write the content as a suspiciously specific late-night infomercial that oversells the topic",
  "Write the content as a courtroom trial transcript, with the topic on trial for being too impressive",
  "Write the content as a pirate's treasure map, with cryptic clues leading to the secrets of the topic",
  "Write the content as a rap battle between two rival experts arguing about the topic",
  "Write the content as an over-the-top theme park ride announcement hyping up the topic as the next big attraction",
  "Relate the topic to a heist gone hilariously wrong",
  "Relate the topic to a secret underground society that has guarded it for centuries",
  "Relate the topic to an intense rivalry between two ancient rival kingdoms",
  "Relate the topic to a reality TV talent show competition",
  "Include a dramatic countdown of the 5 most shocking facts about the topic",
  "Include a made-up urban legend or cryptid inspired by the topic",
  "Write the content as a bedtime story about the topic that gets increasingly unhinged with every paragraph",
  "Write the content as an alien broadcast warning the rest of the galaxy about the topic",
  "Present the topic as a museum audio tour led by a guide who keeps getting distracted",
  "Stage the explanation as a courtroom trial, with the topic defending itself against outrageous accusations",
  "Describe the topic through the field notes of an alien anthropologist encountering it for the first time",
  "Turn the topic into a recipe, complete with bizarre ingredients and a totally unnecessary garnish",
  "Deliver the topic as a weather forecast for a region where the forecast keeps getting stranger",
  "Write a baffled office memo from a manager trying to make the topic fit into a spreadsheet",
  "Uncover the topic as an archaeological discovery, complete with wildly speculative theories",
  "Reveal the topic through a fortune cookie whose predictions grow increasingly specific",
  "Host a game show where contestants must guess increasingly ridiculous facts about the topic",
  "Narrate the topic as a nature documentary observing it in its \"natural habitat\"",
  "Explain the topic as a user manual for a time traveler who arrived in the wrong century",
  "Cover the topic like a celebrity gossip columnist reporting on its latest scandal",
  "Present the topic as a mission-control briefing for an expedition to a very suspicious moon",
  "Describe the topic in a travel brochure for tourists with extremely unusual tastes",
  "Give the topic a pep talk from a coach whose motivational metaphors make no sense",
  "Build a cozy mystery around the topic, revealing clues one by one",
  "Sing the topic as an operatic aria packed with grand emotions and tiny details",
  "Make the topic a choose-your-own-adventure where every path leads to a surprising fact",
  "Write a school report about the topic in the voice of a raccoon who clearly did not do the reading",
  "Imagine a museum exhibit about how people in the year 3000 misunderstood the topic",
  "Present the topic as an emergency broadcast interrupted by increasingly irrelevant announcements",
  "Review the topic as a skeptical dragon who has seen everything and is hard to impress",
  "Stage a debate between two bickering historians who cannot agree on the topic's importance",
  "Explain the topic through a series of subway announcements for a station no one has heard of",
  "Turn the topic into a soap opera episode full of dramatic reveals and unnecessary longing",
  "Introduce the topic as the secret password to an absurdly exclusive club",
  "Write a diary entry from a houseplant observing the topic with quiet judgment",
  "Explain the topic as a construction foreman directing a crew of metaphors",
  "Draft a legally binding contract between the topic and anyone curious enough to read about it",
  "Record the topic as an expedition log from a deep-sea voyage into uncharted waters",
  "Create an FAQ answered by a nervous intern who is trying very hard to sound qualified",
  "Announce the topic as a royal decree from a kingdom ruled by a very small monarch",
  "Present the topic as a school assembly speech delivered by a principal with suspicious enthusiasm",
  "Describe the topic as a collectible trading card, complete with strange stats and a dubious special ability",
  "Write the topic as a late-night radio call-in show where every caller has a different theory",
  "Frame the topic as a museum placard for an artifact with an extremely confusing backstory",
  "Explain the topic as a cooking-show demonstration where the key ingredient is never revealed",
  "Broadcast the topic as a crackly vintage radio bulletin from a future that already happened",
  "Write a complaint letter from the topic to the universe's customer service department",
  "Create a field guide to spotting the topic in the wild, including several unreliable warning signs",
  "Present the topic as a school detention assignment written by a student with a flair for drama",
  "Describe the topic through a series of fortune-teller predictions that are oddly practical",
  "Turn the topic into a space-station maintenance checklist with one item that makes no sense",
  "Write the topic as a postcard sent home by a weary explorer who has seen too much",
  "Explain the topic as a puppet-show script featuring two sock puppets with opposing opinions",
  "Frame the topic as the opening announcement at a very eccentric awards ceremony",
];

const topicPromptsSerious = [
  "Write in a clear, professional, and informative tone throughout.",
  "Structure the content for a general, well-read audience — explain any necessary jargon in plain language.",
  "Include a short, factual FAQ section addressing common questions about the topic.",
  "Include a brief real-world example or case study illustrating the topic.",
  "Adopt the voice of a knowledgeable subject-matter expert, precise and matter-of-fact.",
  "Emphasize practical, actionable takeaways the reader can use.",
  "Include relevant historical or contextual background where it adds real value.",
  "Keep the writing concise and focused — avoid padding or filler.",
  "Where appropriate, note current best practices or standards related to the topic.",
  "Write as a well-researched explainer piece, as a careful, credible writer would.",
  "Adopt the structure of a scientific paper, moving from research question to evidence, interpretation, and conclusion.",
  "Separate empirical findings from hypotheses, and label each clearly.",
  "State the central research question before presenting supporting detail.",
  "Describe the method of analysis and explain why it suits the topic.",
  "Compare credible interpretations, noting where evidence favors one over another.",
  "Synthesize prior scholarship into a literature-review narrative rather than a list of sources.",
  "Assess the argument as a peer reviewer, identifying strengths, gaps, and needed qualifications.",
  "Organize the material as lecture notes, with a clear hierarchy of concepts and key terms.",
  "Translate specialized concepts for a technical audience outside the topic's immediate field.",
  "Draft in the formal register of a legal memorandum, distinguishing law, analysis, and conclusion.",
  "Define important terms precisely and use them consistently throughout.",
  "Separate duties, permissions, and prohibitions as a contract drafter would.",
  "Analyze legal exposure cautiously, distinguishing established rules from fact-dependent questions.",
  "Frame the discussion as a regulatory interpretation, citing the purpose and scope of relevant requirements.",
  "Draft a model provision that states its intended effect, conditions, and exceptions.",
  "Prepare an executive summary that leads with the decision or insight senior leaders need.",
  "Write as a board briefing, foregrounding strategic implications, oversight duties, and choices.",
  "Use an investor-relations voice focused on performance drivers, outlook, and material uncertainties.",
  "Frame the topic as an earnings-call commentary, connecting results to management's stated priorities.",
  "Write a financial analyst note that distinguishes valuation assumptions from observable facts.",
  "Separate reported metrics from adjusted measures and explain the basis for each.",
  "Structure the analysis as a management-consulting report, moving from diagnosis to recommendation.",
  "Break the problem into a clear issue tree before evaluating its component parts.",
  "Lead with a prioritized recommendation, then show the reasoning and implementation path.",
  "Quantify costs, benefits, and trade-offs wherever credible figures are available.",
  "Write as a corporate strategy brief, clarifying competitive position and strategic options.",
  "Draft a press release with a newsworthy lead, verified details, and a restrained quotation.",
  "Use a crisis-communications register that states known facts, immediate actions, and next updates.",
  "Write an internal corporate memo that makes the requested action and deadline unmistakable.",
  "Present the information as a technical manual, using task-oriented sections and unambiguous instructions.",
  "Specify prerequisites, inputs, and expected outputs before describing a technical procedure.",
  "Organize the content as a troubleshooting guide, moving from symptoms to checks and remedies.",
  "Document an interface as an API reference, defining parameters, return values, and failure cases.",
  "Write an architecture decision record that captures context, options, and the rationale for the choice.",
  "Frame recommendations as an engineering standard, with measurable requirements and verification criteria.",
  "Conduct a quality audit that links each finding to evidence, criteria, and corrective action.",
  "Classify audit findings by severity and distinguish isolated defects from systemic issues.",
  "Assess compliance against explicit requirements, recording evidence and unresolved gaps.",
  "Present the topic as a risk assessment, identifying hazards, likelihood, impact, and controls.",
  "Distinguish inherent risk from residual risk after mitigation measures are applied.",
  "Write a policy brief that states the issue, available options, and implications for decision-makers.",
  "Prepare a legislative briefing that summarizes the proposal, affected parties, and implementation questions.",
  "Use diplomatic language that preserves neutrality while making positions and points of agreement clear.",
  "Draft a government notice with a clear authority, scope, effective date, and public action required.",
  "Write a grant proposal that connects the need, objectives, work plan, and intended outcomes.",
  "Explain the theory of change by linking resources and activities to measurable results.",
  "Design a monitoring-and-evaluation framework with indicators, data sources, and reporting intervals.",
  "Prepare a procurement specification that defines functional needs, acceptance criteria, and supplier obligations.",
  "Write a research protocol that states the objective, procedures, safeguards, and analysis plan.",
  "Present the topic as a clinical case report, separating presentation, assessment, intervention, and outcome.",
  "Structure the discussion as a systematic review, making inclusion criteria and evidence limitations explicit.",
  "State the boundaries of the analysis and explain how they affect the conclusions.",
  "Organize the material as an academic course outline, progressing from foundational ideas to advanced questions.",
  "Create an annotated glossary that clarifies technical vocabulary in its field-specific context.",
  "Write a financial due-diligence brief that tests assumptions, scrutinizes liabilities, and flags open questions.",
  "Frame the analysis as a market-entry assessment, covering demand, barriers, channels, and competitive response.",
  "Document the topic as an operations postmortem, separating timeline, contributing factors, and follow-up actions.",
  "Use root-cause analysis to distinguish underlying process failures from immediate symptoms.",
  "Prepare a sustainability disclosure that defines its reporting scope, metrics, and accounting boundaries.",
  "Write an ESG analysis that separates environmental, social, and governance considerations.",
  "Maintain a decision log that records the choice, alternatives considered, owner, and rationale.",
  "Use a customer-success brief that connects user needs to adoption barriers and measurable outcomes.",
  "Present the account as an incident report, preserving chronology and distinguishing confirmed facts from assumptions.",
  "Conduct an ethical impact assessment that identifies affected groups, competing duties, and safeguards.",
  "Build a safety case by linking each major claim to supporting evidence and controls.",
  "Write a product requirements document with user needs, constraints, and testable acceptance conditions.",
  "Create a data dictionary that defines each field, unit, source, and allowed value.",
  "Format the procedure as a standard operating procedure with roles, steps, and escalation points.",
  "Write a patent-style abstract that states the technical problem, claimed approach, and distinguishing feature.",
  "Compose a formal position paper that states its thesis, supporting grounds, and response to counterarguments.",
];

const designPromptsShared = [
  "Use CSS Grids in an interesting way.",
  "Add CSS Animations",
  "Give some elements hover effects",
  "Use fonts and colors that make the website look like it is from the 1950s.",
  "make the website look feminine",
  "make the website look masculine",
  "Use CSS Grids to structure the website",
  "Use a brutalist web design aesthetic: raw, blocky, unpolished on purpose",
  "Use a neumorphism style with soft embossed shadows",
  "Use a glassmorphism style with translucent, blurred panels",
  "Use a soft pastel minimalist style",
  "Use a deliberately asymmetric, off-grid layout",
  "Build the layout mostly from circular and curved shapes instead of rectangles",
  "Default to a dark mode color scheme",
  "Use a bold, oversized typography style where text is the main visual element",
];

const designPromptsFun = [
  "use as many colors as possible",
  "Apply a style that looks like the website is from the 2000s.",
  "Use a green-on-black hacker terminal aesthetic",
  "Use a vaporwave aesthetic with gradients and retro-futuristic shapes",
  "Use a neon cyberpunk aesthetic with dark backgrounds and glowing accents",
  "Use a playful, colorful children's-book illustration style",
  "Use a handmade zine/collage style with rotated elements and torn-paper borders",
  "Use a retro 8-bit / pixel-art inspired style",
];

const designPromptsSerious = [
  "Style it like a printed newspaper or magazine layout",
  "Use a clean Swiss/International Typographic Style with strict grids",
  "Use a clean modern SaaS landing page style",
  "Use a strict monochrome palette with exactly one bold accent color",
  "Use a clean editorial typography style with generous whitespace",
  "Use a restrained corporate style with a structured grid and a single muted accent color",
  "Use a refined, high-end minimalist style associated with premium brands",
  "Use a premium SaaS product aesthetic with layered depth — soft shadows, subtle gradients, and one confident accent color used generously and deliberately, the way modern developer-tool landing pages (Linear/Stripe/Vercel-style) look",
  "Use a bold design-agency-portfolio aesthetic with strong asymmetric grid tension and oversized, confident typographic statements",
  "Use a high-fashion editorial aesthetic with dramatic whitespace and oversized display type as the dominant visual element",
  "Use a data-forward fintech aesthetic with structured grids, confident use of large numerals/stats as visual elements, and a crisp, trustworthy accent color",
  "Use a luxury-brand aesthetic: extreme restraint paired with immaculate typographic craft and one perfectly placed detail, not emptiness for its own sake",
  "Use a bold geometric aesthetic built from a considered two-color system and strong, deliberate shape language",
  "Use a warm, tactile 'design studio' aesthetic — paper-like texture cues, a confident serif display type, and a sense of craft rather than sterile minimalism",
];

const colorMoodsShared = [
  "an earthy, muted color palette",
  "a soft pastel color palette",
  "a high-contrast black and white palette with almost no color",
  "a rich jewel-tone color palette",
  "a washed-out, faded vintage color palette",
  "a dark and moody color palette",
  "a warm autumnal color palette",
  "a cool icy color palette",
];

const colorMoodsFun = [
  "a bright neon and electric color palette",
  "a candy-bright, saturated color palette",
];

const brightnessStylesLight = [
  "a light, bright background (white, cream, or a pale tint) with dark or richly colored text — airy and sunlit, not moody",
  "a bold, highly saturated, colorful background — cheerful and vivid",
  "a stark white background with black text and exactly one loud accent color",
  "a medium-toned, warm background — neither stark white nor near-black",
  "a soft pastel-toned light background",
  "a clean, light neutral background (light grey, off-white, sand) with strong colorful accents",
  "a bright, high-key background built from two or three saturated colors",
  "a crisp white or near-white background with bold black type and one or two accent colors",
];

const brightnessStylesDark = [
  "a dark background with light text",
  "a dark, moody, sophisticated palette — deep tones with restrained, elegant accents",
  "a deep near-black background with high-contrast light text and one vivid accent color",
  "a rich dark background built from deep saturated jewel tones rather than plain black",
];

const layoutStyles = [
  "a magazine-style multi-column layout",
  "a single long scrolling narrative layout",
  "a dashboard-like layout made of cards",
  "a poster-style full-bleed layout",
  "a layout centered around one large hero section followed by short blocks",
  "a layout with a sticky sidebar next to scrolling content",
];

const containerStyles = [
  "no visible containers at all: separate sections purely with whitespace, alignment and typography — no borders, no background boxes, no shadows anywhere",
  "thin 1px hairline rules between sections instead of boxes",
  "a single large, low-opacity watermark-style word or numeral placed only in genuinely empty background space (a margin, a corner, behind whitespace) — it must never sit behind, overlap, or come near any paragraph of text",
  "sharp diagonal or angled dividers between sections instead of straight rectangular boundaries",
  "a strict typographic grid where the columns are expressed only through text alignment and spacing, no visible structure or backgrounds at all",
  "solid flat color fields that fill entire grid cells edge-to-edge, no padding-box look, no drop shadows",
  "large full-bleed color or texture blocks as the grid cells themselves",
  "traditional card-style boxes with visible padding and a border or drop shadow that clearly reads as a distinct card, not just a colored area",
  "boxed sections with a solid background fill and generous padding, but no border or shadow — soft panels rather than sharp-edged cards",
  "a genuine mix on the same page: some sections sit in visible boxes or cards, other sections are freeform with no container at all",
];

const cornerStyles = [
  "sharp, perfectly square corners everywhere (border-radius: 0)",
  "a small, subtle border-radius (around 4-8px) on boxed or bordered elements",
  "a generous, soft border-radius (16px or more) on boxed or bordered elements",
  "mixed corners on purpose — some elements sharp, some rounded, deliberately inconsistent for character",
];

const headerStyles = [
  "a huge, oversized type-only header where the page title is the dominant visual element, filling most of the viewable width, with no imagery or decorative shapes competing for attention",
  "a full-bleed color-block header band with the title reversed out in a contrasting color, spanning the entire width of the page",
  "a compact, minimal header condensed into a thin top bar, with the title set small and understated rather than dominating the page",
  "a split header divided into two halves: the title and a short tagline on one side, an abstract decorative shape or pattern on the other",
  "a header integrated directly into a sidebar or corner rather than spanning the top of the page, so the title reads more like a nameplate than a banner",
  "a stamp- or label-style header: the title sits inside a small badge-like shape off to one side, rather than spanning the full width of the page",
  "a header set on a bold diagonal or angled band, breaking out of the normal horizontal grid",
  "a layered, overlapping header where the title text overlaps a large background shape or numeral, without ever overlapping any body text",
  "a retro ticket-stub or plaque-style header treatment, bordered and set apart like a printed label",
  "a vertical or rotated header running along one edge of the page rather than sitting horizontally at the top",
];

// kept serious-only, too sparse for fun mode, leaves grid layouts half-empty
const contentStructuresShared = [
  "a chronological timeline moving through distinct time periods or stages",
  "a Q&A / interview format alternating short questions and answers",
  "a myth-vs-fact format with short contrasting statements side by side",
  "a glossary of short term definitions related to the topic",
  "a diary/journal-entry style narrated in first person across several dated entries",
  "a numbered list, but avoid the generic default of exactly 3 or 4 items — pick a number between 5 and 9, or between 2 and 3, anything but the usual 3-4",
  "two contrasting perspectives on the topic presented side by side",
];

const contentStructuresSerious = [
  "a single flowing long-form narrative with no bullet lists, numbered steps, or card-like sections at all",
  "one central bold statement or quote as the centerpiece, with only one or two short supporting paragraphs — deliberately sparse, not full of sections",
  "a single long uninterrupted block of prose with no internal headings or subdivisions at all (the page header with the title is separate from this and always present regardless)",
];

const styleDirections = {
  portfolio: "a personal portfolio website showcasing work and skills",
  editorial: "an editorial/magazine-style publication",
  corporate: "a professional company/corporate website",
  landing: "a product landing page focused on conversion",
  blog: "a blog or personal writing site",
  event: "a website promoting a single event",
  personal: "a personal home page / digital garden",
};

const funExtras = {
  extraBunt:
    "HARD REQUIREMENT, not a soft suggestion: use at least 5-6 clearly distinct, highly saturated hues across the page — including the background itself, not just one accent color on a neutral base. A tasteful two-tone or muted palette is a failure condition here, even if it looks polished — the whole point is that it reads as almost too much color at first glance.",
  extraTrashy:
    "HARD REQUIREMENT, not a soft suggestion: go deliberately tacky and so-bad-it's-good — clashing colors, gaudy gradients, loud novelty fonts, glittery/neon energy, over-the-top borders or drop shadows. A clean, elegant, minimal, or generally 'tasteful' result is the opposite of what's being asked for and is a failure condition here, even if it's well-executed.",
  extraChaotic:
    "HARD REQUIREMENT, not a soft suggestion: the layout itself must read as busy and maximalist at a glance — rotated or overlapping decorative elements, clashing font sizes/weights jumbled together, no calm orderly grid (while still respecting the non-negotiable no-text-overlap safety rules above). A clean, orderly, well-organized layout is a failure condition here.",
  extraUnhinged:
    "HARD REQUIREMENT, not a soft suggestion: push both the content's tone and the visual choices as far into weird/unhinged territory as you can — unexpected color clashes, strange decorative elements, a slightly absurd or unsettling energy throughout. A restrained or conventional result is a failure condition here.",
};

const seriousExtras = {
  extraMinimal:
    "Push toward extreme minimalism — remove anything not strictly necessary, maximize whitespace.",
  extraElegant:
    "Lean into refined, high-end elegance — generous whitespace, a restrained palette, quiet confidence.",
  extraConservative:
    "Keep it deliberately conservative and safe — traditional, low-risk design choices throughout.",
};

const contentLengthDirectives = [
  "Keep the content to a solid, satisfying one-pager's worth — comprehensive but not sprawling.",
  "This topic has a lot of ground to cover — go noticeably longer and deeper than a typical one-pager, well beyond the minimum, if the topic genuinely supports it.",
  "Include a generous amount of content, well beyond the bare minimum — treat this like a proper feature article with real depth, covering multiple angles of the topic.",
  "Keep it efficient and tight — enough content to feel complete and satisfying, but don't pad it out further than the topic actually needs.",
  "Go long: this should feel like a rich, thorough exploration of the topic with substantially more content than a minimal page, covering many angles and details.",
];

const spacingUnits = [4, 6, 8, 10, 14, 18];
const typeScaleRatios = [1.125, 1.2, 1.25, 1.333, 1.5, 1.618];

// picks a few random items from a list
function getRandomItems(arr, min, max) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  return shuffled.slice(0, count);
}

// picks random numbers used to build the color palette and spacing
function getRandomDesignTokens() {
  const accentHue = Math.floor(Math.random() * 360);
  const secondaryHue =
    (accentHue + getRandomItems([90, 120, 150, 180, 210], 1, 1)[0]) % 360;
  const baseSpacingPx = getRandomItems(spacingUnits, 1, 1)[0];
  const typeScaleRatio = getRandomItems(typeScaleRatios, 1, 1)[0];
  return { accentHue, secondaryHue, baseSpacingPx, typeScaleRatio };
}

module.exports = {
  fontsString,
  fontsList,
  topicPromptsFun,
  topicPromptsSerious,
  designPromptsShared,
  designPromptsFun,
  designPromptsSerious,
  colorMoodsShared,
  colorMoodsFun,
  brightnessStylesLight,
  brightnessStylesDark,
  layoutStyles,
  containerStyles,
  cornerStyles,
  headerStyles,
  contentStructuresShared,
  contentStructuresSerious,
  styleDirections,
  funExtras,
  seriousExtras,
  contentLengthDirectives,
  getRandomItems,
  getRandomDesignTokens,
};
