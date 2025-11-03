import Link from "next/link";
import { notFound } from "next/navigation";

const blogList = [{
    id: 1,
    title: "Meditation & Medication",
    excerpt: "Meditation and medication both play important roles in healing. While medication...",
    type: "Meditation",
    releaseAt: "27 Oct 2025",
    postedBy: "Rohan Dutta",
    content: "Meditation and medication both play important roles in healing.While medication treats physical symptoms through drugs, meditation calms the mind and reduces stress naturally.Medication can provide quick relief, whereas meditation builds long-term emotional balance.Together, they support both the body and the mind in different but complementary ways.Using meditation alongside medication often leads to a more holistic approach to health and well-being."
}, {
    id: 2,
    title: "The Art of Traveling",
    excerpt: "The Art of Traveling teaches us to explore the world with curiosity and an open heart...",
    type: "Travelling",
    releaseAt: "02 Nov 2025",
    postedBy: "Ben Affleck",
    content: "The Art of Traveling teaches us to explore the world with curiosity and an open heart.It is not just about visiting new places, but about understanding cultures and collecting meaningful experiences.Through the art of traveling, we learn patience, adaptability, and appreciation for diversity.Every journey becomes a lesson, shaping our perspective and enriching our memories.Ultimately, The Art of Traveling reminds us that the world is full of beauty waiting to be discovered."
}, {
    id: 3,
    title: "Education for a Brighter Tomorrow",
    excerpt: "Education for a Brighter Tomorrow highlights the power of learning to shape a better future...",
    type: "Education",
    releaseAt: "20 Oct 2025",
    postedBy: "Peter Parker",
    content: "Education for a Brighter Tomorrow highlights the power of learning to shape a better future. It reminds us that knowledge empowers individuals to overcome challenges and create new opportunities. Through education, young minds develop critical thinking, creativity, and confidence. Education for a brighter tomorrow also means preparing students for a world that is constantly changing. It encourages innovation, responsibility, and lifelong learning. Ultimately, Education for a Brighter Tomorrow shows that investing in learning today builds a stronger, more successful future for everyone."
}];

interface BlogProps {
    params: {
        slug: string
    }
}
async function SelectedBlog({ params }: BlogProps) {
    const { slug } = await params;
    const selectedBlog = blogList.filter((val) => val.id === parseInt(slug));
    if (selectedBlog.length === 0)
        notFound();
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <nav className="mb-8">
                    <Link href={"/blog"} className="inline-block bg-purple-800 text-white px-4 py-2 rounded hover:bg-cyan-300 hover:text-purple-800 hover:font-Medium transition-colors duration-200">Back to blogs</Link>
                </nav>
                <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-purple-800 bg-purple-200 px-3 py-2 rounded-full">
                            {selectedBlog[0].type}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{selectedBlog[0].title}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>By {selectedBlog[0].postedBy} on {selectedBlog[0].releaseAt}</span>
                    </div>
                </header>
                <article className="bg-white rounded-lg shadow-sm p-8 border-1 border-cyan-400">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-gray-700 leading-relaxed"> {selectedBlog[0].content !== null ? selectedBlog[0].content.replaceAll("\n", "<br/>") : ""}</p>
                    </div>
                </article>
            </div>
        </div>)
}

export default SelectedBlog;