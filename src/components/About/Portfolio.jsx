import react from 'react';
import PortfolioItem from './PortfolioItem';
import portfolio from '../../data/portfolio';

function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row 
        items-center justify-center'>
            <div className='grid grid-cols-9 md:grid-cols-9
            lg:grid-cols-9 gap-4 '>
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;