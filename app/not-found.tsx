import Link from "next/link";

function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md mx-auto text-center px-4">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-cyan-300">404</h1>
                </div>
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Page Not Found</h2>
                <p className="text-purple-800 mb-6">Sorry, the page  you are looking for doesn't exist.
                    It might be moved, deleted or entered the wrong URL.
                </p>
                
            </div>
        </div>);
}

export default NotFound;