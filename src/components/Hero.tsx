import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-primary/10">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Welcome to Your Amazing App
          </h1>
          <p className="max-w-[600px] text-zinc-700 md:text-xl dark:text-zinc-300">
            Create something extraordinary with our powerful and intuitive platform
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};