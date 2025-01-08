
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoaderImg from "@/public/assets/icons/loader.svg"

interface ButtonPropsTwo {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode
}
const SubmitButton = ({ isLoading, className, children }: ButtonPropsTwo) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "bg-green-500 text-white w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={LoaderImg}
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;