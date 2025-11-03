import Link from "next/link";
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

function Blogs() {

    return (<div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to our blogs!</h1>
                <p className="text-gray-600 text-lg">We hope you would like it.</p>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {blogList.map((val: any) => {
                    return (
                        <article key={val.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-purple-800 bg-purple-200 px-2 py-1 rounded">{val.type}</span>
                                    <span className="text-sm text-gray-500">{val.releaseAt}</span>
                                </div>
                                <h2 className="text-xl font-semisolid text-gray-900 mb-3 line-clamp-2">{val.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{val.excerpt}</p>
                                <Link href={"/blog/" + val.id} className="inline-block bg-purple-800 text-white px-4 py-2 rounded hover:bg-cyan-300 hover:text-purple-800 hover:font-Medium transition-colors duration-200">Read more</Link>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    </div>)
}
export default Blogs;