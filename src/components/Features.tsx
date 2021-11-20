import { ReactElement, useState } from 'react';
import { FaGlobe, FaTrophy, FaKey, FaLock, FaChartLine, FaMap } from 'react-icons/fa';

interface FeaturesT {
    id: number
    icon: ReactElement
    title: string
    description: string
}

const Features = () => {

    const [features] = useState<FeaturesT[]>([
        { id: 1, icon: <FaGlobe className='feature__icon' />, title: "World's best luxury homes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error, aliquid quibusdam commodi itaque et veniam quasi cupiditate repellendus." },
        { id: 2, icon: <FaTrophy className='feature__icon' />, title: "Only the best properties", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error, aliquid quibusdam commodi itaque et veniam quasi cupiditate repellendus." },
        { id: 3, icon: <FaMap className='feature__icon' />, title: "All homes in top location", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error, aliquid quibusdam commodi itaque et veniam quasi cupiditate repellendus." },
        { id: 4, icon: <FaKey className='feature__icon' />, title: "New home in one week", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error, aliquid quibusdam commodi itaque et veniam quasi cupiditate repellendus." },
        { id: 5, icon: <FaChartLine className='feature__icon' />, title: "Top 1% realtors", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error, aliquid quibusdam commodi itaque et veniam quasi cupiditate repellendus." },
        { id: 6, icon: <FaLock className='feature__icon' />, title: "Secure payments on nexter", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error, aliquid quibusdam commodi itaque et veniam quasi cupiditate repellendus." }
    ])

    return (
        <div className="features">
            {features.map((feature: FeaturesT) => (
                <div className="feature" key={feature.id}>
                    {feature.icon}
                    <h4 className="heading-4 heading-4--dark">{feature.title}</h4>
                    <p className="feature__text">{feature.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Features
