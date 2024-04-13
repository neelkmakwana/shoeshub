import { useNavigate } from "react-router-dom";

// Array of category objects
const category = [
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/men-sports.png?alt=media&token=d0232a06-9dab-4034-b69c-9b1e8ac417cc',
        name: 'Men Sports'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/men-formal.png?alt=media&token=1bdf2256-ef46-4437-b160-084efaab0fa4',
        name: 'Men Formal'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/men-sandal.png?alt=media&token=a6de27ad-d6d8-495f-afa0-57de2755581b',
        name: 'Men Sandal'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/men-casual.png?alt=media&token=d8e97cdf-2f80-4870-9492-eb4b80aa92dc',
        name: 'Men Casual'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/men-ethnic.png?alt=media&token=702c8f16-b75c-4c32-b3e0-d3957a63e04e',
        name: 'Men Ethnic'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/women-sports-removebg-preview.png?alt=media&token=b867e320-33c0-45e9-bfad-a65e09e7903e',
        name: 'Women Sports'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/womens-heels-removebg-preview.png?alt=media&token=c95e1fc3-e869-45c7-bf28-072924ae7171',
        name: 'Women Heel'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/women-sandals-removebg-preview.png?alt=media&token=2dfc2423-9033-4f3e-b6f7-bb3710bf4329',
        name: 'Women Sandal'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/womens-formals-removebg-preview.png?alt=media&token=b59392a7-be18-4388-b219-a3add5aeb054',
        name: 'Women Formal'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/women-casual-removebg-preview.png?alt=media&token=86dfa9ce-4834-4139-b57d-0ae3ed6d3107',
        name: 'Women Casual'
    }
];

const Category = () => {
    const navigate = useNavigate();
    
    
    // Splitting the category array into two arrays
    const firstRowCategories = category.slice(0, 5);
    const secondRowCategories = category.slice(5);

    return (
        <div>
            {/* First row categories */}
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                <div className="flex flex-col items-center">
                {/* Display Women Category label */}
                <p className="text-xl font-bold mb-6">Men Footwear</p>
                    <div className="flex">
                        {/* Render first row categories */}
                        {firstRowCategories.map((item, index) => (
                            <div key={index} className="px-3 lg:px-10">
                                
                                <div
                                    onClick={() => navigate(`/category/${item.name}`)}
                                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-indigo-600 transition-all hover:bg-cyan-600 cursor-pointer mb-1 flex items-center justify-center">
                                    <img src={item.image} alt="img" className="max-w-full max-h-full" />
                                </div>
                                <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            
            {/* Second row categories */}
            <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar mt-5">
                <div className="flex flex-col items-center">
                {/* Display Women Category label */}
                <p className="text-xl font-bold mb-6">Women Footwear</p>
                <div className="flex">
                    {/* Render second row categories */}
                    {secondRowCategories.map((item, index) => (
                        <div key={index} className="px-3 lg:px-10">
                            <div
                                onClick={() => navigate(`/category/${item.name}`)}
                                className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-indigo-600 transition-all hover:bg-cyan-600 cursor-pointer mb-1 flex items-center justify-center">
                                <img src={item.image} alt="img" className="max-w-full max-h-full" />
                            </div>
                            <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name}</h1>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            
            {/* CSS for hiding scrollbar */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }" }} />
        </div>
    );
};

export default Category;
