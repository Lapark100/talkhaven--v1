export function TabsTrigger({ value, children }) {
  return (
    <button
      className="w-full py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-blue-500 focus:outline-none"
    >
      {children}
    </button>
  );
}