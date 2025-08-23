import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800">
      <LoaderIcon className="animate-spin w-10 h-10 text-primary" />
    </div>
  );
};

export default PageLoader;
