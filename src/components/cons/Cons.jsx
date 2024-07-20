const Cons = () => {
  return (
    <>
      <section id="cons"
      className="bg-y dark:bg-d dark:text-white py-10">
          <div className="container md:w-[70%]">
          <div className="grid items-center gap-3 grid-cols-1 sm:grid-cols-2">
              <div className="relative md:w-[70%] sm:py-16 py-9">
                  <div className="relative font-bold">
                      <div className="text-center text-3xl xl:text-6xl font-bold text-black/10">Cons</div>
                      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md md:text=xl">Cons</h1>
                  </div>
              </div>
              <div className="dark:text-white">
                  <li>Unrealistic body standards leading to body image issues.</li>
                  <li>Misinformation from unqualified influencers.</li>
                  <li>Time spent on fitness content detracting from other important activities.</li>
                  <li>Obsession with fitness and appearance impacting overall self-worth.</li>
                  <li>Comparison culture exacerbates feelings of inadequacy and anxiety.</li>
                  
                  <a href="./#recommendation" className="primary-btn inline-block my-3 mr-6">How to Balance?</a>
              </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Cons