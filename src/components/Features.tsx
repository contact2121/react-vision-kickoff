import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Easy to Use",
    description: "Intuitive interface that makes everything simple",
  },
  {
    title: "Powerful Features",
    description: "All the tools you need to succeed",
  },
  {
    title: "Fast & Reliable",
    description: "Built for performance and dependability",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};