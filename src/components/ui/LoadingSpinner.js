export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#f0f4f3] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#244d3f] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-[#4b5563]">Loading friends...</p>
      </div>
    </div>
  );
}
