import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">About Cinecolor</h1>

        <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
          <p>
            Cinecolor is a digital archive dedicated to exploring color as a primary narrative force in cinema. Every
            film ever made is, fundamentally, a work of color. Yet for decades, film criticism focused on script,
            performance, and editing while treating color as secondary—as decoration.
          </p>

          <p>
            This project exists to change that. We believe color is not ornament but language. It's how directors
            communicate emotion, establish worlds, and guide viewers through narratives.
          </p>

          <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Why Color Matters</h2>

          <p>
            When we watch *Suspiria*, we're not just seeing a horror film—we're experiencing a palette so deliberately
            saturated that it becomes the film's primary terror. When Wes Anderson composes a scene in soft pastels,
            he's not adding beauty to a story; the beauty *is* the story.
          </p>

          <p>
            Color is the first language cinema speaks. Before dialogue registers, before plot unfolds, before characters
            move, color has already shaped how we feel. Red makes us alert. Blue makes us pensive. Yellow invites
            warmth. Green suggests growth or decay depending on saturation and context.
          </p>

          <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Our Methodology</h2>

          <p>
            For each film analyzed, we extract the dominant color palette—not by averaging pixels but by identifying the
            chromatic decisions that define the film's visual identity. We then contextualize these choices within
            cinema history, examining how directors and cinematographers use color intentionally.
          </p>

          <p>Each analysis considers:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The historical context of color technology available during production</li>
            <li>The director's and cinematographer's documented chromatic philosophy</li>
            <li>How color serves the film's narrative and thematic goals</li>
            <li>The palette's influence on audience perception and emotional response</li>
            <li>The film's place in cinema's larger chromatic evolution</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-foreground mt-12 mb-6">Beyond Analysis</h2>

          <p>
            Cinecolor is not just criticism. It's a love letter to the craft of cinematography, to the technical
            brilliance of color scientists and technicians, and to the artistic vision of filmmakers who understood that
            cinema is fundamentally visual.
          </p>

          <p>
            Whether you're a filmmaker seeking inspiration, a film student studying visual language, or simply someone
            who loves cinema, we hope these analyses deepen your appreciation for the color that makes film possible.
          </p>
        </div>
      </main>
    </div>
  )
}
