const GridOverlay = () => {
  return (
    <div className="absolute inset-0 z-50 pointer-events-none grid grid-cols-12 gap-4 mr-36">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="bg-red-700/10 h-[33.5rem] w-[3.8rem] border border-none hidden sm:flex"
        ></div>
      ))}
    </div>
  );
};

export default GridOverlay;
