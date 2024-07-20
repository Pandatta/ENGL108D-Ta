import introPic from '../../assets/sc.png';
const Queen = () => {
  return (
    <main className="w-full bg-y dark:bg-stone-500 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-10 sm:py-0 sm:h-[500px]">
            <div>
                <div>
                    <p className="uppercase">Hello</p>
                    <p className="text-xl font-bold md:text-2xl text-black/80 dark:text-white">Fitness Content VS Networked Teens</p>
                    <p className="text-md">Social media is brimming with fitness content that attracts millions of teens worldwide. From diet tips to workout routines, fitness influencers promote a balanced and active lifestyle. While this content can inspire and empower, it also poses risks to teen mental health. This website explores the impact of fitness content on teens, highlighting both pros and cons, and offers advice for balanced consumption.</p>
                    <a
                    className="inline-block primary-btn !px-5 !py-3" href="./#prevalence">What's On</a>
                </div>
            </div>

            {/* image */}
            <div>
                <img src={introPic} alt="Not Found"
                className="w-full md:max-w-lg mx-auto rounded-3xl" />
            </div>
        </div>
    </main>
  )
}

export default Queen;