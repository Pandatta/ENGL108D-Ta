import M1 from "../../assets/m1.jpg";
import M2 from "../../assets/M2.jpg";
import M3 from "../../assets/M3.jpg";

const methods = [
    {
        name: "Follow Diverse Influencers",
        description: "Follow creators who support body positivity and all kinds of body shapes to get a more realistic outlook on fitness. And then, look for material that prioritizes overall health and wellness over visual appeal. Just as influencers who talk about their failings and difficulties might give a more honest and balanced perspective on fitness.",
        image: M1,
        icon: "https://img.icons8.com/?size=100&id=61161&format=png&color=000000",
        bgColor: "bg-blue-500 bg-opacity-80",
    },
    {
        name: "Make Mental Health a Priority",
        description: "Remember that mental and physical wellness are just as important. Moreover, remind yourself not to overload and recognize when to take a stop. In other words, pay attention to your body and mind, and whenever feeling overwhelmed find support. Doing bobbies that help you relax while taking care of your mental health, such as yoga, meditation and quality time with loved ones.",
        image: M2,
        icon: "https://img.icons8.com/?size=100&id=TFuPlZrVJidx&format=png&color=000000",
        bgColor: "bg-blue-500 bg-opacity-80",
    },
    {
        name: "Limit Screen Time",
        description: "Make time limits for the time you spend watching fitness-related information. Then, make sure it doesn’t get in the way of your daily suits and interaction with others. Such as reading, biking and other outdoor activities, combined with screen time improve your overall health.",
        image: M3,
        icon: "https://img.icons8.com/?size=100&id=IhRMbviGBV6c&format=png&color=000000",
        bgColor: "bg-blue-500 bg-opacity-80",
    }
];


const MethodBox = () => {
    return (
      <section id="methods" className="my-10 container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {
                  methods.map(({ name, description, image, icon, bgColor }) => (
                      <div key={name} className={`relative ${bgColor} rounded-lg text-d dark:text-white p-6`}>
                          {/* Background Image with Opacity */}
                          <div 
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 rounded-lg"
                              style={{ backgroundImage: `url(${image})` }}
                          ></div>
                          <div className="relative z-10">
                              <div className="flex items-center">
                                  <img src={icon} alt={`${name} icon`} className="w-10 h-10 mr-4" />
                                  <h1 className="text-xl font-bold">{name}</h1>
                              </div>
                              <p className="mt-4">{description}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
      </section>
    );
  }
export default MethodBox