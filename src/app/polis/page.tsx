export default function Polis() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-center">Polis 公眾議題討論</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full h-64 object-cover" src="/all/sea.jpg" alt="作品一" />
                    <div className="px-4 py-2">
                        <h2 className="font-semibold text-xl mb-1">永續</h2>
                        <p className="text-gray-600 text-sm">BLAH BLAH BLAH BLAH</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
