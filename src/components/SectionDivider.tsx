const SectionDivider = () => {
  return (
    <div className="relative py-2">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 max-w-md h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
