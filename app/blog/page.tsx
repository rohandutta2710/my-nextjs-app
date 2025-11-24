import Link from "next/link";
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