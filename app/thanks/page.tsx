import goalImage from '../images/micah-tindell-0LvgvMjomnk-unsplash_1.jpg';

export default function ThanksPage() {

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
          Thank-You
        </h1>
      </div>

      <h1 style={{textAlign: 'center'}} className="text-3xl text-[#ffbf00ff] font-bold">Thanks for dropping by!
 </h1>
 <p style={{textAlign: 'center'}}>If you have any questions about anything, feel free to contact me at: kriddell@uoguelph.ca.</p>
      <br></br>

<h1 style={{textAlign: 'center'}} className="text-3xl text-[#ffbf00ff] font-bold">Acknowledgements

 </h1>
      <p style={{textAlign: 'center'}}> Special thanks to Tammy, Kousik, and Aaravinda. You have been so helpful in helping me navigate corporate life, answering my questions, and helping me navigate any of my access related issues. </p>

<br></br><br></br><br></br><br></br>
<p style={{textAlign: 'center'}}>
 This website will be built upon as I complete more work terms.
</p>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>
  );
}