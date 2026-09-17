import manulifeLogo from '../images/manulife-logo.jpg'
import manulifeBoard from '../images/maulife-skateboard.jpg'
export default function JobPage() {

  return (
    <div>

     {/* Hero Section */}
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center text-white shadow-lg"
        style={{ backgroundImage: `url(${ manulifeLogo.src})` }}
      >
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlay Text */}
        <h1 className="relative z-10 text-4xl font-extrabold tracking-wide drop-shadow-md">
          Co-Op Placements
        </h1>
      </div>

      <h1 className="text-3xl text-[#ffbf00ff] font-bold">WT1: Manulife </h1>
        <img
        src={manulifeLogo.src}
        alt="Manulife Logo"
        className="w-full max-w-md h-auto my-4 rounded-lg shadow"

      />

      <p>Manulife is an insurance and financial services company that operates Manulife Bank. It is a global company with branches in Asia and Europe. In the States, Manulife is known as John Hancock Financial. Within Manulife, I worked as a Full-Stack Engineer Technology Intern under the Canada Wealth Technology division on the Data ETL Squad under Tammy Crowley. I got to work on internal applications and small business enhancements in the form of automation projects over the course of the work term. Manulife also hosted the Intern Innovation Challenge, which you can read more about under my Projects Section.

<br></br><br></br>
</p>
<img
        src={manulifeBoard.src}
        alt="Manulife Skateboard"
        className="w-full max-w-md h-auto my-4 rounded-lg shadow"

      />
<p>
Fun fact! On the first day of the work term, Manulife shipped all the Canada interns (even those from Montreal and Vancouver) to the head office in Toronto. It was really cool to get to meet everyone! At the end, everyone split off into teams and completed a supply-chain-esque skateboard building challenge where you had to negotiate with other teams to get all the materials and decor items you needed. My team’s design was one of the selected winners. :)

</p>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>
  );
}