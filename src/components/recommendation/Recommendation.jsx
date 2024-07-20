import MethodBox from './MethodBox.jsx'

const Recommendation = () => {
  return (
    <>
    <section id="recommendation" className="bg-primary dark:bg-d dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-2xl text-center font-bold mb-4 border-b-4 border-b pb-1">
          Recommendation
        </h1>
        <p className="text-center md:w-[50%] mx-auto">To navigate the complex landscape of fitness content, networked teens should adopt a balanced approach. This includes following diverse influencers, prioritizing mental health, and limiting screen time to ensure overall well-being.</p>
      </div>

      {/* Methods box */}
      <div>
        <MethodBox />
      </div>
    </section>
    </>
  )
}

export default Recommendation