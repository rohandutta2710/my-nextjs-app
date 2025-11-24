import Link from "next/link";
import { notFound } from "next/navigation";

const blogList = [{
    id: 1,
    title: "Meditation & Medication",
    excerpt: "Meditation plays a important role in life as it keeps our body calm and...",
    type: "Meditation",
    releaseAt: "27 Oct 2025",
    postedBy: "Rohan Dutta",
    content: "Meditation plays a important role in life as it keeps our body calm and act as a medication to heal much faster from various disease. Meditation help us to be fit mentally and as our mind will be fit then it will inspire us to do daily activity happily. Also, meditation helps to manage the stress on work which improves our concentration in our workspace. There are lot of advantages of meditation therefore person should adapt it in day to day life for everybody's well being."
}, {
    id: 2,
    title: "Art of Traveling",
    excerpt: "The Art of travelling helps us to grow in all aspect of life and...",
    type: "Travelling",
    releaseAt: "02 Nov 2025",
    postedBy: "Ben Affleck",
    content: "Art of travelling helps us to grow in all aspect of life and it gives us idea to behold every part of nature along with different culture followed by humans around the globe. Travelling also makes us happy and enjoy in our leisure timing. Travelling is used to discover the creatures exist on earth and observer them. One should be more experienced to travel to some of the places as person can face multiple issues like wild animals, compass dysfunctional etc. Companions can make travelling more comfortable and enjoyable."
}, {
    id: 3,
    title: "Education for a Brighter Tomorrow",
    excerpt: "Education for brighter tomorrow indicates that education is crucial to have...",
    type: "Education",
    releaseAt: "20 Oct 2025",
    postedBy: "Peter Parker",
    content: "Education for brighter tomorrow indicates that education is crucial to have good future as education gives us idea to behold the things in the world to a different angle. Education is not just reading the books and all but it teaches us to grow in all aspect of life so that we could face all the problems of life in a good manner. Education helps to earn our own livelihood in future which is benficial for an individual and family. Investment in education in today can make our future better."
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