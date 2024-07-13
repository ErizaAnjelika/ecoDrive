export const Footer = () => {
  return (
    <div className="w-full py-10 mt-10 bg-gray-800 flex flex-col justify-center items-center gap-5">
      {/* social media */}
      <div className="flex gap-10">
        <img
          src="/img/media/facebook.png"
          alt="facebook"
          className="w-10 h-10"
        />
        <img src="/img/media/twitter.png" alt="twitter" className="w-10 h-10" />
        <img src="/img/media/youtube.png" alt="youtube" className="w-10 h-10" />
        <img
          src="/img/media/instagram.png"
          alt="instagram"
          className="w-10 h-10"
        />
      </div>
      <p className="text-white text-center w-[60%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        magnam sequi debitis perferendis tempore animi reiciendis labore modi,
        atque temporibus voluptate aspernatur corporis unde libero saepe
        corrupti. Vitae, consequatur sed.
      </p>

      <div className="flex items-center gap-2">
        <img className="w-10" alt="logo" src="/img/logo.png" />
        <h1 className="text-xl font-bold text-white">
          EcoDrive<span className="text-green-500">.</span>
        </h1>
      </div>
      <p className="text-white">© 2022. All rights reserved.</p>
    </div>
  );
};
