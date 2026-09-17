import goalImage from '../images/micah-tindell-0LvgvMjomnk-unsplash_1.jpg';
import GICErr from '../projectMedia/GIC_Page_Error_Expl.png'
import DPJournErr from '../projectMedia/Dp_Upload_OutofFocus.png'
import uFeesRep from '../projectMedia/uFees_automation_mock.png'
export default function ProjectsPage() {

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
          My Projects
        </h1>
      </div>

      <h1 className="text-3xl text-[#ffbf00ff] font-bold">GIC Fee Page
      </h1>
      <p>A page I built in an internal application used to review and manage fee transactions. The GIC Page is used to assist in the process of reviewing GIC Fees, enabling faster review through bulk record selection and status updates. Approved rows get moved to a different table where they can be seen on either the ‘Review Fees’, or ‘Fee Report’ pages. Programmed in Javascript, this application uses React JS, Next JS, the KendoReact component library, and an internal Manulife MUX icon and component library. Backend updates are handled by a Type ORM transaction.</p>
<img
        src={GICErr.src}
        alt="Manulife Logo"
        className="w-full max-w-2xl h-auto my-4 rounded-lg shadow"

      />
      <p>The GIC page incorporates status update error handling by catching exceptions bubbled up from the service layer. Above is an example of an error message.
</p>



        <h1 className="text-3xl text-[#ffbf00ff] font-bold">uFees Report Automation
      </h1>
      <img
        src={uFeesRep.src}
        alt="Manulife Logo"
        className="w-full max-w-2xl h-auto my-4 rounded-lg shadow"

      />
      <p>The automation of the uFees reports involves the user dropping the raw data retrieved from the internal uFees application into a folder. Currently the report uses a SharePoint folder, but due to the business users being unable to grant me access to any of their current SharePoint sites due to them containing sensitive information, I will be changing the data source to a Network Folder accessed via a service account in my second work term at Manulife. The data is loaded into and transformed via Power BI Desktop before the final report data is formatted in Power BI Reports. I had to use Power BI Reports because the process of building the report data involves using aggregated rows. Power BI Desktop limits tables with aggregated data to 30,000 rows when exporting. My report had more rows than that so I pivoted to using Power BI Reports, which allowed me to apply more formatting and most importantly does not have a row limit.
</p>


    <h1 className="text-3xl text-[#ffbf00ff] font-bold">Dataphile Journal Upload
      </h1>
      <p>This project consists of a Power Automate Desktop flow that is used to auto-upload files (called journals) to the internal Dataphile application. The PAD flow incorporates messages to guide the user though running the flow. The Dataphile application is not super compatible with PAD, with some buttons and menus not registering as such, so it was an interesting challenge to figure out how to get around those restrictions (mainly by simulating keyboard shortcuts).
</p>
      <img
        src={DPJournErr.src}
        alt="Manulife Logo"
        className="w-full max-w-2xl h-auto my-4 rounded-lg shadow"

      />
      <p>There are lots of error handling and recovery measures to allow the flow to continue when a step gets interrupted whether that be caused by a menu being closed mid-navigation, user connectivity issues resulting in delayed file uploads, or if the user starts the flow with the Dataphile application closed.

</p>


    <h1 className="text-3xl text-[#ffbf00ff] font-bold">Intern Innovation Challenge

      </h1>
      <p>The Intern Innovation challenge is an event hosted for all of the American and Canadian interns. Interns were assigned a team and a business problem and asked to brainstorm, research, solidify, and present a potential solution to the case. My team made it to the semi-finals. Our business case involved the process of Fund Onboarding. Specifically, related to issues tracking ownership of, and progress on work items in the process. Lots of teams are involved in Fund Onboarding, and the launch schedule is tight. My team’s proposed solution involved the Development of a Power Apps application to serve as a central hub of truth. It would have role-based access with multiple pages to view completion statistics, update the status of tasks, and manage user roles. Power Automate would be used to send notifications of work ready to begin, reminders of deadlines, and escalation emails for overdue work to help the fund launch stay on schedule.
<br></br><br></br>
After watching the American finalist presentations, I realized a lot of them leveraged existing technology used within Manulife/John Hancock. In hindsight, I think I would have suggested my group look at JIRA, as it’s a technology that my squad uses and it can integrate with Power BI for progress reporting. At the time this option flew over my head as I was more interested in exploring some new options, but leveraging technology the company already uses will always be more cost effective than creating a solution from scratch.

</p>
    </div>
  );
}