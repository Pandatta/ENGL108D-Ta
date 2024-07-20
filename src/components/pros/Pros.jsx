const Pros = () => {
  return (
    <>
    <section id="pros"
    className="bg-y dark:bg-d dark:text-white py-10">
        <div className="container md:w-[70%]">
        <div className="grid items-center gap-3 grid-cols-1 sm:grid-cols-2">
            <div className="sm:order-2 relative md:w-[70%] sm:py-16 py-9">
                <div className="relative font-bold">
                    <div className="text-center text-3xl xl:text-6xl font-bold text-black/10">Pros</div>
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md md:text=xl">Pros</h1>
                </div>
            </div>
            <div className="sm:order-1 dark:text-white">
                <li>Fitness content provides motivation and knowledge for teens, helping them adopt healthier lifestyles.</li>
                <li>Creators offer easy-to-follow exercise and dietary plans, making it simpler for teens to commit to fitness.</li>
                <li>Regular physical activity reduces stress, anxiety, and depression, releasing endorphins that improve mood.</li>
                <li>Participating in fitness challenges helps teens build confidence and a positive self-image.</li>
                <li>Exercise releases endorphins, improving mood.</li>
                
                <a href="./#recommendation" className="primary-btn inline-block my-3 mr-6">How to Balance with Cons</a>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Pros