import type React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export function GradientBackground({
  children,
}: Readonly<GradientBackgroundProps>) {
  return (
    <div className={`relative w-full min-h-screen`}>
      <div
        className="absolute inset-0 -z-10 overflow-hidden opacity-50 flex justify-center items-center"
        style={{ filter: "blur(200px)" }}
      >
        <div
          className="absolute left-0 top-0 w-[40vw] h-[40vw]"
          style={{
            borderRadius: "20%",
            backgroundColor: "rgba(112, 86, 245, 0.50)",
          }}
        />

        <div
          className="absolute right-0 top-[300px] w-[40vw] h-[40vw]"
          style={{
            borderRadius: "20%",
            backgroundColor: "rgba(112, 86, 245, 0.25)",
          }}
        />

        <div
          className="absolute right-[40%] bottom-[10px] w-[25vw] h-[40vw]"
          style={{
            borderRadius: "20%",
            backgroundColor: "rgba(112, 86, 245, 0.75)",
          }}
        />
      </div>
      {/* Content above gradients */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
