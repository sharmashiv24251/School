import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/placeholder.svg"
            alt="Gallery Image 1"
            width={300}
            height={300}
            className="object-cover w-full rounded-lg overflow-hidden"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/placeholder.svg"
            alt="Gallery Image 1"
            width={500}
            height={500}
            className="object-cover rounded-lg overflow-hidden"
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/placeholder.svg"
            alt="Gallery Image 2"
            width={300}
            height={300}
            className="object-cover w-full rounded-lg overflow-hidden"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/placeholder.svg"
            alt="Gallery Image 2"
            width={500}
            height={500}
            className="object-cover rounded-lg overflow-hidden"
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/placeholder.svg"
            alt="Gallery Image 3"
            width={300}
            height={300}
            className="object-cover w-full rounded-lg overflow-hidden"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/placeholder.svg"
            alt="Gallery Image 3"
            width={500}
            height={500}
            className="object-cover rounded-lg overflow-hidden"
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/placeholder.svg"
            alt="Gallery Image 4"
            width={300}
            height={300}
            className="object-cover w-full rounded-lg overflow-hidden"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <img
            src="/placeholder.svg"
            alt="Gallery Image 4"
            width={500}
            height={500}
            className="object-cover rounded-lg overflow-hidden"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
