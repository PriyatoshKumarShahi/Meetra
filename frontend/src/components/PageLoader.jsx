import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <div className="flex flex-col items-center gap-4">
        <LoaderIcon className="w-12 h-12 animate-spin text-white" />
        <p className="text-white text-lg font-semibold animate-pulse">
          Preparing your space...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
