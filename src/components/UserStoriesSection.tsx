const stories = [
  {
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    bgColor: "bg-awadoc-yellow/20",
    bubbles: [
      { text: "Check today's prices", position: "top-2 -right-4" },
      { text: "Thanks, saved me money!", position: "bottom-4 -left-4" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bgColor: "bg-awadoc-blue/20",
    bubbles: [
      { text: "Smart shopping for u", position: "top-4 -left-4" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bgColor: "bg-awadoc-purple/20",
    bubbles: [
      { text: "Find the best deals", position: "top-2 -right-4" },
    ],
  },
];

const UserStoriesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {stories.map((story, index) => (
            <div key={index} className="relative">
              <div className={`w-48 h-48 md:w-56 md:h-56 rounded-full ${story.bgColor} overflow-hidden`}>
                <img
                  src={story.image}
                  alt="User story"
                  className="w-full h-full object-cover"
                />
              </div>
              {story.bubbles.map((bubble, bi) => (
                <div
                  key={bi}
                  className={`absolute ${bubble.position} bg-background shadow-md rounded-full px-4 py-2 text-xs font-medium text-foreground whitespace-nowrap border border-border`}
                >
                  {bubble.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;
