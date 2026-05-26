type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {children}
    </div>
  );
}