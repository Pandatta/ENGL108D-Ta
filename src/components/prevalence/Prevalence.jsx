const Prevalence = () => {
  return (
    <>
    <section id="prevalence"
    className="bg-primary dark:bg-d dark:text-white py-10">
        <div className="container md:w-[70%]">
        <div className="grid items-center gap-3 grid-cols-1 sm:grid-cols-2">
            <div className="relative md:w-[70%] sm:py-16 py-9">
                <div className="relative font-bold">
                    <div className="text-center text-3xl xl:text-6xl font-bold text-black/10">Popularity and Nature of Fitness Content</div>
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md md:text=xl">Popularity and Nature of Fitness Content</h1>
                </div>
            </div>
            <div className="dark:text-white">
                <p>Fitness content dominates platforms like YouTube, TikTok, and Instagram, where influencers like Sam Sulek, Alex Kim, and Chloe Ting share workout videos, motivational posts, and meal plans. These creators often present idealized fitness images, featuring muscular bodies and intense training programs, which particularly attract teens and beginners who are heavy social media users and aspire to emulate their fitness idols. The popularity of fitness content stems from its easy accessibility and the promise of quick results, with simple, equipment-free workouts that teens can do at home. Additionally, the interactive nature of social media allows users to <b>connect with creators, seek advice, and share their progress, fostering a supportive community</b>.</p>
                <a href="./#pros" className="primary-btn inline-block my-3 mr-6">{" "}Pros</a>
                <a href="./#cons" className="s-btn inline-block my-3 mr-6">{" "}Cons</a>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Prevalence