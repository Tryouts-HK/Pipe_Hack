import ChatGPTSearchPage, { SearchComponent } from './chatpage';

const SearchPage = () => {
    return (
        <div className="flex h-screen">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-gray-200 p-4">
                {/* Sidebar content */}
                <h2 className="text-lg font-bold mb-4">Past Asks</h2>
                <ul>
                    <li className="py-1">Filter 1</li>
                    <li className="py-1">Filter 2</li>
                    <li className="py-1">Filter 3</li>
                    {/* Add more filters as needed */}
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-100 p-8">
                {/* Main content */}
                {/* <h1 className="text-2xl font-bold mb-4">Search Results</h1> */}
                <div className="grid gap-2">
                    <label htmlFor="search" className="text-lg font-semibold">Search</label>
                    <select id="search" className="w-full p-2 border rounded">
                        <option value="1">Filter 1</option>
                        <option value="2">Filter 2</option>
                        <option value="3">Filter 3</option>
                    </select>
                </div>
                {/* Render search results here */}
                <div className="overflow-y-auto">
                    {/* Example search result item */}
                    <ChatGPTSearchPage />
                    {/* Repeat for more search results */}
                </div>
                <SearchComponent />
            </div>

            {/* Right Sidebar */}
            {/* <div className="w-1/4 bg-gray-200 p-4">
                <h2 className="text-lg font-bold mb-4">Related Topics</h2>
                <ul>
                    <li className="py-1">Topic 1</li>
                    <li className="py-1">Topic 2</li>
                    <li className="py-1">Topic 3</li>
                </ul>
            </div> */}
        </div>
    );
};

export default SearchPage;
