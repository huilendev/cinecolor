"use client"

interface ColorPaletteProps {
  palette: {
    vibrant: string
    muted: string
    accent: string
    light: string
    dark: string
  }
}

export function ColorPalette({ palette }: ColorPaletteProps) {
  return (
    <div className="grid grid-cols-5 gap-4 my-8">
      {Object.entries(palette).map(([name, color]) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <div
            className="w-20 h-20 rounded-lg border-2 border-border shadow-md transition-all hover:scale-110 hover:shadow-lg cursor-pointer"
            style={{ backgroundColor: color }}
            title={`${name}: ${color}`}
          />
          <span className="text-xs text-foreground/70 font-medium capitalize text-center">{name}</span>
          <span className="text-xs font-mono text-foreground/50">{color}</span>
        </div>
      ))}
    </div>
  )
}
