import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './LoadingSkeleton.css';


const LoadingSkeleton = ({cards}) => {
    return (
        Array(cards).fill().map(item => 
            <div className='card-skeleton'>     
                <span className='skeleton-icon complete'>
                    <Skeleton circle width={50} height={50} />
                </span>
                <p className='skeleton-item'>
                    <Skeleton count={1}  style={{marginBottom: '.6rem'}}/> 
                </p>
            </div>    
        )
 
    )
}

export { LoadingSkeleton }