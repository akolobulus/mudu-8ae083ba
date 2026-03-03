import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import blogThumb1 from "@/assets/blog-thumb-1.jpg";

const posts = [
  {
    date: "28 Feb 2026",
    title: "🤖 Introducing Mudu: Smart Market Intelligence in Your Pocket via WhatsApp",
    image: blogThumb1,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 pb-16 text-center max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Blog</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Stay informed with the latest trends, insights, and breakthroughs in AI-powered market intelligence. From expert tips to in-depth guides, our blog is your go-to resource for smarter, more accessible shopping support.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="rounded-2xl overflow-hidden mb-4">
                <img src={post.image} alt={post.title} className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug">{post.title}</h3>
              <Button variant="outline" className="rounded-full px-6">Read Full Article</Button>
            </div>
          ))}
        </div>
      </section>

      <CTAFooter />
      <Footer />
    </div>
  );
};

export default Blog;
