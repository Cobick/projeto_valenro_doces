type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <main
      className="
        relative
        overflow-x-hidden
      "
    >
      {/* BACKGROUND EFFECTS */}

      <div
        className="
          fixed
          top-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          bg-pink-300/20
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          fixed
          bottom-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-orange-200/20
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {children}
    </main>
  );
}