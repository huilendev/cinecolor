// lib/films.ts
export interface FilmPost {
  slug: string
  title: string
  year: number
  director: string
  description: string
  heroImage: string
  content: string
  palette: {
    vibrant: string
    muted: string
    accent: string
    light: string
    dark: string
  }
}

export const films: FilmPost[] = [
  {
    slug: "star-wars-a-new-hope",
    title: "Star Wars: A New Hope",
    year: 1977,
    director: "George Lucas",
    description:
      "Mythic space opera that balances desert ochres with stark blacks and luminous blues — an analog-era color grammar for modern epic fantasy.",
    heroImage: "/images/star-wars-a-new-hope.jpg",
    content: `Star Wars mixes naturalistic palettes (Tatooine sand ochres) with production design color accents (the empire's black/grey and the rebels' utility tones). The result is a world that reads both lived-in and mythic.`,
    palette: {
      vibrant: "#D9B382", // Tatooine sand
      muted: "#7A8FA7",   // steel blue / ship metal
      accent: "#1B2B4A",  // deep space navy
      light: "#F2EDE6",   // pale sand light
      dark: "#0C0C0F"    // space black
    }
  },
  {
    slug: "the-wizard-of-oz",
    title: "The Wizard of Oz",
    year: 1939,
    director: "Victor Fleming",
    description:
      "A landmark use of Technicolor: the shift from monochrome Kansas to the saturated fantasy of Oz, with emblematic emeralds, rubies and golds.",
    heroImage: "/images/the-wizard-of-oz.jpg",
    content: `The Wizard of Oz remains the archetype of Technicolor spectacle. The transition from sepia to full color is not merely technical—it is thematic: black-and-white reality versus saturated fantasy. The film uses emerald green for Oz's authority and mystery, ruby red for emotional peaks, and warm golds to suggest wonder and nostalgia.

The design choices here redefined how filmmakers thought about color as narrative device: color can signal a world-change, a psychological threshold, a dream made visible.`,
    palette: {
      vibrant: "#0FA04B", // emerald
      muted: "#D9B04C",   // warm gold
      accent: "#C1272D",  // ruby red
      light: "#F4EAD5",   // parchment / yellowish light
      dark: "#0E2B2B"     // deep shadow green/teal
    }
  },
  {
    slug: "fantasia",
    title: "Fantasia",
    year: 1940,
    director: "Various (Walt Disney Productions)",
    description:
      "Disney's experimental symphony of color: abstract animation where music and pigment become the same language.",
    heroImage: "/images/fantasia.jpg",
    content: `Fantasia treats color as music: hues change with orchestral timbre, and sequences are scored with chromatic motion. Deep ultramarines and violets contrast with golds and crimson to create visual movements that mirror the orchestra.

It's a test case for chromatic storytelling in animation—color is protagonist, not ornament.`,
    palette: {
      vibrant: "#2B2D7B", // deep ultramarine
      muted: "#6E4A7E",   // muted violet
      accent: "#F0C808",  // gold
      light: "#F7F4EA",   // pale parchment
      dark: "#0B0B1E"     // near black navy
    }
  },
  {
    slug: "the-adventures-of-robin-hood",
    title: "The Adventures of Robin Hood",
    year: 1938,
    director: "Michael Curtiz",
    description:
      "One of early Technicolor's finest: lush forest greens and vivid costume reds that sell heroism and romantic adventure.",
    heroImage: "/images/the-adventures-of-robin-hood.jpg",
    content: `This film uses saturated greens of the Sherwood forest and bright reds for pageantry. Costume and landscape exist in concert, producing a sense of mythic immediacy. Technicolor here emphasizes heroism and spectacle rather than subtlety.`,
    palette: {
      vibrant: "#1F7A3A", // forest green
      muted: "#B28B5A",   // rustic tan
      accent: "#C12026",  // costume red
      light: "#FAF3E6",   // warm light
      dark: "#153426"     // deep forest shadow
    }
  },
  {
    slug: "gone-with-the-wind",
    title: "Gone with the Wind",
    year: 1939,
    director: "Victor Fleming",
    description:
      "Epic Technicolor melodrama: warm ambers, burned oranges and deep greens create a painterly Civil War tableau.",
    heroImage: "/images/gone-with-the-wind.jpg",
    content: `Gone with the Wind uses warm, painterly colors to amplify drama and grandeur. From the plantation's golds to Scarlett's scarlet dresses, color is both emotion and spectacle—an aesthetic engine for the film's operatic scale.`,
    palette: {
      vibrant: "#B83B2E", // deep red
      muted: "#C69C6D",   // warm tan/amber
      accent: "#3C6B3A",  // dark green
      light: "#F1E7D6",   // parchment
      dark: "#2B1F1A"     // deep shadow brown
    }
  },
  {
    slug: "niagara",
    title: "Niagara",
    year: 1953,
    director: "Henry Hathaway",
    description:
      "Technicolor noir-thriller starring Marilyn Monroe: uses lush saturated colors to juxtapose glamour and danger.",
    heroImage: "/images/niagara.jpg",
    content: `Niagara turns natural spectacle into cinematic menace. The falls' cold blues and the motel's neon and lipstick reds create a visual tension between romance and violence.`,
    palette: {
      vibrant: "#1E6AA8", // waterfall blue
      muted: "#8EA0B6",   // cooled blue-gray
      accent: "#C41E3A",  // Monroe red
      light: "#F7F9FB",   // pale mist
      dark: "#10232B"     // deep aquatic black
    }
  },
  {
    slug: "singin-in-the-rain",
    title: "Singin' in the Rain",
    year: 1952,
    director: "Stanley Donen, Gene Kelly",
    description:
      "Musical Technicolor exuberance: bright primaries and cheerful pastels that celebrate Hollywood's golden age of song and dance.",
    heroImage: "/images/singin-in-the-rain.jpg",
    content: `This film embraces saturated primaries (yellows, reds, turquoises) to signify joy and theatricality. The choreography is staged in spaces painted with palette as narrative: color performs as much as the actors.`,
    palette: {
      vibrant: "#FFD400", // bright yellow
      muted: "#6BD3D6",   // turquoise
      accent: "#E03D3D",  // cherry red
      light: "#FFF7E6",   // warm cream
      dark: "#2B2B2B"     // neutral dark
    }
  },
  {
    slug: "vertigo",
    title: "Vertigo",
    year: 1958,
    director: "Alfred Hitchcock",
    description:
      "A psychological palette: sickly greens, warm ambers and haunting crimsons map obsession and desire.",
    heroImage: "/images/vertigo.jpg",
    content: `Vertigo uses color as psychological signifier: greens and teals for unease, red for fixation and emotional crescendo. The film's chromatic choices amplify the protagonist's spiraling subjectivity.`,
    palette: {
      vibrant: "#1B6B4B", // green-teal
      muted: "#A7A58D",   // faded olive
      accent: "#B31B1B",  // Hitchcock red
      light: "#EFE8DB",   // dimmed ivory
      dark: "#2E2A2A"     // deep neutral
    }
  },
  {
    slug: "sleeping-beauty",
    title: "Sleeping Beauty",
    year: 1959,
    director: "Clyde Geronimi",
    description:
      "A stylized Disney Technicolor: pastel goth fairytale with lavender, pinks and forest greens forming painterly vistas.",
    heroImage: "/images/sleeping-beauty.jpg",
    content: `Sleeping Beauty's production design leans into stylized, matte-painted environments; color is decorative and mythic—lavenders and rose-pinks create a dreamlike, storybook atmosphere.`,
    palette: {
      vibrant: "#A78AB3", // lavender
      muted: "#E9C7D6",   // rose-salmon
      accent: "#2F5E3D",  // forest green
      light: "#FFF5F9",   // pale pinkish light
      dark: "#2A2127"     // shadow
    }
  },
  {
    slug: "suspiria",
    title: "Suspiria",
    year: 1977,
    director: "Dario Argento",
    description:
      "Baroque horror in color: extreme reds, magentas and saturated blues compose a nightmarish palette.",
    heroImage: "/images/suspiria.jpg",
    content: `Argento uses saturated gels to render horror as chromatic assault. The crimson and magenta dominate, turning sets into theatrical bloodscapes; color itself becomes the film's most violent instrument.`,
    palette: {
      vibrant: "#C41E3A", // strong red
      muted: "#7A0536",   // deep magenta
      accent: "#2A2D7E",  // indigo/blue
      light: "#FFEDEE",   // pale pink light
      dark: "#100006"     // near-black
    }
  },
  {
    slug: "the-empire-strikes-back",
    title: "The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    description:
      "Colder, moodier sequel with icy blues (Hoth) and hazy warm interiors (Bespin) — contrast becomes emotional geography.",
    heroImage: "/images/the-empire-strikes-back.jpg",
    content: `Empire extends the original's palette into more extreme climates: Hoth's blues and grays contrast with Bespin's warm interiors. The film uses color to delineate environment and tone.`,
    palette: {
      vibrant: "#A9C7E0", // icy blue
      muted: "#7B8791",   // neutral steel
      accent: "#D9A24A",  // warm interior gold
      light: "#F4F7FA",   // pale snow light
      dark: "#0F1720"     // deep shadow
    }
  },
  {
    slug: "return-of-the-jedi",
    title: "Return of the Jedi",
    year: 1983,
    director: "Richard Marquand",
    description:
      "A finale that balances jungle greens (Endor) and ceremonial reds/golds — chromatic closure to the original trilogy.",
    heroImage: "/images/return-of-the-jedi.jpg",
    content: `Jedi's palette leans into natural greens and ritualistic color cues (ceremonial costumes, glowing lights) to deliver a sense of resolution — color here marks cultural difference and mythic closure.`,
    palette: {
      vibrant: "#2E7D4A", // forest green
      muted: "#BDA27E",   // warm earth
      accent: "#A0332A",  // ceremonial red
      light: "#F0EBD6",   // daylight
      dark: "#0E1C15"     // deep shadow green
    }
  },
  {
    slug: "blade-runner",
    title: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
    description:
      "Neo-noir futurism: heavy neon cyan and saturated orange punctuate perpetual rain, composing a synthetic urban melancholy.",
    heroImage: "/images/blade-runner.jpg",
    content: `Blade Runner is a study in neon contrast: electric cyan and warm orange create a persistent tension between synthetic light and human ruin. The city as chromatic organism is central to the film's mood.`,
    palette: {
      vibrant: "#00B4FF", // neon cyan
      muted: "#6B4C3B",   // polluted brown
      accent: "#FF6B35",  // warm orange
      light: "#F7F9FC",   // washed light
      dark: "#071021"     // night black
    }
  },
  {
    slug: "in-the-mood-for-love",
    title: "In the Mood for Love",
    year: 2000,
    director: "Wong Kar-wai",
    description:
      "A luxuriant palette of jewel tones and ambers—color as sensual architecture for repressed desire.",
    heroImage: "/images/in-the-mood-for-love.jpg",
    content: `Wong's film bathes scenes in deep reds, ambers and emeralds; the palette is both sumptuous and constraining, mirroring the characters' emotional repression and longing.`,
    palette: {
      vibrant: "#A1273A", // crimson
      muted: "#7A542A",   // warm amber
      accent: "#2A6E4B",  // emerald
      light: "#F3E8E1",   // soft ivory
      dark: "#151215"     // near black
    }
  },
  {
    slug: "the-fall",
    title: "The Fall",
    year: 2006,
    director: "Tarsem Singh",
    description:
      "A globe-trotting visual fantasia: hyper-saturated oranges, purples and jewel tones create an otherworldly fairy tale.",
    heroImage: "/images/the-fall.jpg",
    content: `The Fall's aesthetic is maximalist color: extreme saturation and painterly compositions produce a cinematic fairy tale. Color drives narrative mood and emotional intensity.`,
    palette: {
      vibrant: "#FF6B00", // saturated orange
      muted: "#8E6EB2",   // muted purple
      accent: "#0075C9",  // deep azure
      light: "#FFF1D6",   // soft cream
      dark: "#2A0B21"     // deep maroon black
    }
  },
  {
    slug: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    description:
      "A pastel symphony of pinks, lavenders and creams—color used with architectural precision and emotional irony.",
    heroImage: "/images/the-grand-budapest-hotel.jpg",
    content: `Wes Anderson composes scenes like dioramas, with pastel palettes and meticulous color coding. The film's hues create a nostalgic, artificial world where emotion is regulated by chromatic order.`,
    palette: {
      vibrant: "#F3B8D6", // pastel pink
      muted: "#D7C0E6",   // lavender
      accent: "#A1D0C7",  // mint
      light: "#FFF8F5",   // cream
      dark: "#43324A"     // muted plum shadow
    }
  },
  {
    slug: "la-la-land",
    title: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    description:
      "A modern Technicolor homage: saturated blues, lemon yellows and magentas recreate musical-era romance in contemporary L.A.",
    heroImage: "/images/la-la-land.jpg",
    content: `La La Land intentionally channels the color grammar of classic Hollywood musicals: bold primaries and dreamy pastels are deployed to evoke nostalgia while telling a modern love story.`,
    palette: {
      vibrant: "#2E6EE6", // cobalt blue
      muted: "#F6D34B",   // lemon yellow
      accent: "#D24E8D",  // magenta
      light: "#FFF7EE",   // warm light
      dark: "#1B1630"     // twilight
    }
  },
  {
    slug: "the-shape-of-water",
    title: "The Shape of Water",
    year: 2017,
    director: "Guillermo del Toro",
    description:
      "Aqueous romantic palette: teal-greens, brass and muted neutrals that blend fantasy and melancholy.",
    heroImage: "/images/the-shape-of-water.jpg",
    content: `Del Toro's film uses aquatic teal and muted brass tones to create both fairytale intimacy and a retro, otherworldly atmosphere. The palette supports a tenderness both strange and human.`,
    palette: {
      vibrant: "#2A9D95", // teal
      muted: "#8C7A59",   // brass
      accent: "#1B3B4A",  // deep teal-dark
      light: "#EAF6F4",   // pale aqua
      dark: "#0F2326"     // dark marine
    }
  },
  {
    slug: "barbie",
    title: "Barbie",
    year: 2023,
    director: "Greta Gerwig",
    description:
      "An intentionally synthetic, hyper-saturated palette that plays with plastic pinks, cyan accents and high-contrast pop colors.",
    heroImage: "/images/barbie.jpg",
    content: `Barbie embraces artificial palettes as commentary: hyper-saturated pinks and pop neons foreground the film's satirical and referential tone, simultaneously homage and critique of manufactured idealism.`,
    palette: {
      vibrant: "#FF69B4", // barbie pink
      muted: "#FAD6E8",   // pale pink
      accent: "#00B2FF",  // cyan accent
      light: "#FFF7FB",   // near-white
      dark: "#2B102B"     // deep magenta black
    }
  },
  {
    slug: "poor-things",
    title: "Poor Things",
    year: 2023,
    director: "Yorgos Lanthimos",
    description:
      "A surreal and period-inflected palette mixing Victorian earth tones with sudden pops of saturated color—disorienting and stylistic.",
    heroImage: "/images/poor-things.jpg",
    content: `Poor Things navigates period textures and contemporary color flourishes: layered, surprising chroma choices create a filmic world both historic and visually rebellious.`,
    palette: {
      vibrant: "#D96F3B", // warm terracotta
      muted: "#B9A089",   // aged parchment
      accent: "#9D44A2",  // surprising magenta
      light: "#F6F0EA",   // aged cream
      dark: "#241717"     // deep shadow
    }
  },
  {
    slug: "barry-lyndon",
    title: "Barry Lyndon",
    year: 1975,
    director: "Stanley Kubrick",
    description:
      "A period painting on film: candlelit interiors, ochres and deep shadow — Kubrick's tribute to old-master palettes.",
    heroImage: "/images/barry-lyndon.jpg",
    content: `Kubrick's use of natural and candlelight produces tones reminiscent of 18th-century paintings: muted ochres, siennas and subtle blues. The palette is restrained but rich, lending the film a painterly authenticity.`,
    palette: {
      vibrant: "#8B5A2B", // ochre/sepia
      muted: "#CDB79A",   // aged parchment
      accent: "#57708A",  // dusty blue
      light: "#EDE6DD",   // candlelit cream
      dark: "#24160F"     // deep shadow brown
    }
  },
  {
    slug: "mulholland-drive",
    title: "Mulholland Drive",
    year: 2001,
    director: "David Lynch",
    description:
      "A dream-horror of LA color: saturated blues, reds and golds shift with identity and narrative instability.",
    heroImage: "/images/mulholland-drive.jpg",
    content: `Lynch layers saturated hues to induce disorientation: blues that promise, reds that wound, golds that mislead. Color is part of the film's phantom logic, a mood engine for the uncanny.`,
    palette: {
      vibrant: "#1D4E89", // saturated blue
      muted: "#B0862B",   // warm gold
      accent: "#C0182D",  // vivid red
      light: "#FFF6E8",   // pale cream
      dark: "#0D0D10"     // deep night
    }
  },
  {
    slug: "a-clockwork-orange",
    title: "A Clockwork Orange",
    year: 1971,
    director: "Stanley Kubrick",
    description:
      "A confrontational palette—clinical whites collide with blood reds and acidic accents in Kubrick's stylized dystopia.",
    heroImage: "/images/a-clockwork-orange.jpg",
    content: `Kubrick's visual system pits sanitized whites against aggressive reds and unnatural accents, producing a world that is simultaneously ordered and violently disordered. The chromatic tension supports the film's moral provocation.`,
    palette: {
      vibrant: "#FF1E1E", // blood red
      muted: "#CFCFCF",   // clinical gray
      accent: "#9E2E9C",  // acidic violet
      light: "#FFFFFF",   // sterile white
      dark: "#0B0B0B"     // black
    }
  }
]
