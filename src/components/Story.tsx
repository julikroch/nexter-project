import story1 from '../img/story-1.jpeg'
import story2 from '../img/story-2.jpeg'

const Story = () => {
    return (
        <>
            <div className="story__pictures">
                <img src={story1} alt="Story 1" className="story__img-1" />
                <img src={story2} alt="Story 2" className="story__img-2" />
            </div>
            <div className="story__content">
                <h3 className="heading-3 mb-sm">Happy Customers</h3>
                <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="story__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit adipisci error illum perferendis, dolore, accusamus necessitatibus hic voluptas totam saepe veritatis eaque sequi! Velit sequi et quod necessitatibus nisi libero.
                </p>
                <button className="btn">Find your own home</button>
            </div>
        </>
    )
}

export default Story
