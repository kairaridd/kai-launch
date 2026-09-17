import goalImage from '../images/micah-tindell-0LvgvMjomnk-unsplash_1.jpg';

export default function HomePage() {

  return (
    <div>

     {/* Hero Section */}
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center text-white shadow-lg"
        style={{ backgroundImage: `url(${goalImage.src || goalImage})` }}
      >
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlay Text */}
        <h1 className="relative z-10 text-4xl font-extrabold tracking-wide drop-shadow-md">
          Welcome
        </h1>
      </div>

      <h1 style={{textAlign: 'center'}} className="text-3xl text-[#ffbf00ff] font-bold">Hello, nice of you to drop by! </h1>
      <br></br>
      <p style={{textAlign: 'center'}}>This website serves as a central hub detailing my Co-Op placements and experiences during my time at the University of Guelph. It is a record of my journey in the big wide universe of Computer Science. Feel free to have a look around. Use the lefthand hamburger menu bar to explore.
</p>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>
  );
}