interface ProcessStep {
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  color?: "blue" | "purple" | "green" | "pink" | "orange"
}

const stepColors = {
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  green: "bg-green-600",
  pink: "bg-pink-600",
  orange: "bg-orange-600",
}

export function ProcessSteps({ steps, color = "blue" }: ProcessStepsProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start">
          <div
            className={`flex-shrink-0 w-8 h-8 ${stepColors[color]} text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4`}
          >
            {index + 1}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{step.title}</h4>
            <p className="text-gray-700">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
