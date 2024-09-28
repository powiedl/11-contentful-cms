import heroImg from './assets/hero.svg';
function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Below you find a collection of some projects I've been working on.
            You can click at each image which will bring you to the specific
            project.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='womand the the browser' className='image' />
        </div>
      </div>
    </section>
  );
}
export default Hero;
