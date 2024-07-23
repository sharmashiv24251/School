import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function GalleryPage() {
  const content = [
    {
      type: "img",
      url: "https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      description: "Students participating in various sports events.",
      id: 1,
    },
    {
      type: "img",
      url: `https://plus.unsplash.com/premium_photo-1683140893042-af3aa516ae40?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      description: "Students presenting their science projects.",
      id: 2,
    },
    {
      type: "img",
      url: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      description: "Students performing in the cultural fest.",
      id: 3,
    },

    {
      type: "vid",
      url: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with actual video URL
      description: "Virtual tour of Springdale Public School.",
      id: 4,
    },
    {
      type: "vid",
      url: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with actual video URL
      description: "Highlights from the Annual Function 2023.",
      id: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
      {content.map((item) => (
        <Popover key={item.id}>
          <PopoverTrigger asChild>
            <div className="relative group">
              {item.type === "img" ? (
                <img
                  src={item.url}
                  alt={`Gallery ${item.id}`}
                  width={300}
                  height={300}
                  className="object-cover w-full rounded-lg overflow-hidden"
                />
              ) : (
                <video
                  src={item.url}
                  alt={`Gallery Video ${item.id}`}
                  width={300}
                  height={300}
                  className="object-cover w-full rounded-lg overflow-hidden"
                  controls
                />
              )}
              <div className="absolute inset-0 flex items-center text-center justify-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            {item.type === "img" ? (
              <img
                src={item.url}
                alt={`Gallery ${item.id}`}
                width={500}
                height={500}
                className="object-cover rounded-lg overflow-hidden"
              />
            ) : (
              <video
                src={item.url}
                alt={`Gallery Video ${item.id}`}
                width={500}
                height={500}
                className="object-cover rounded-lg overflow-hidden"
                controls
              />
            )}
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
