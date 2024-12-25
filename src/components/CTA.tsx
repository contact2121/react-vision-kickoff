import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="max-w-[600px] text-zinc-600 md:text-lg">
            Join thousands of satisfied users and take your project to the next level
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};