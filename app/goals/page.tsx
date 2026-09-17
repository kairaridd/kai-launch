import goalImage from '../images/micah-tindell-0LvgvMjomnk-unsplash_1.jpg';
import GoalNav from '../components/GoalNav';
export default function GoalsPage() {
  return (
    <div >

     {/* Hero Section */}
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center text-white shadow-lg"
        style={{ backgroundImage: `url(${goalImage.src || goalImage})` }}
      >
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlay Text */}
        <h1 className="relative z-10 text-4xl font-extrabold tracking-wide drop-shadow-md">
          Learning Goals
        </h1>
      </div>

        {/* <GoalNav></GoalNav> */}

<br></br>
      <h2 className="text-3xl text-[#ffbf00ff] font-bold">Goal 1</h2>
    <div className="space-y-6">
      <p><b>Leaning Goal:</b><br></br>
 Learn more about and become comfortable with agile methodology in development. Understand how to use Jira (sprints, stories, etc.) to track progression During Development.
 </p>
 <p><b>Reflection:</b><br></br>
 Learning to use Jira and agile methodology was quite an experience. From knowing absolutely nothing to being able to split, clone, link, and update my stories to track my time spent on and progress towards completing my projects was interesting. It was amazing to work on projects while getting feedback from business users to improve my projects and end up with a final product that is truly helpful. I really like agile development compared to school, where projects are a one-and-done deal and never get any iterations or improvements after they are finished. <br></br><br></br>

Working at a big company like Manulife really opened my eyes to how much organization everything needs. With epics grouping together stories by their type such as Small Business Enhancements, to entire applications in development like MW Fee Navigator, Jira lets us track ongoing efforts on multiple topics to get an overview of overall progress while developers update their assigned stories as they progress through their individual work. Sprints are helpful for breaking up work into smaller chunks. Pairing this with a review of the sprint backlog to make sure the story tracking is up to date and a review of the product backlog to plan future efforts, everything really comes together to allow for clear ownership, progress updates, and easy planning of future efforts.</p>
   </div>
    <br></br>

      <h2 className="text-3xl text-[#ffbf00ff] font-bold">Goal 2</h2>
      <div className="space-y-6">
      <p><b>Leaning Goal:</b><br></br>

Understand how data is transformed using data manipulation and/or query languages like SQL and DAX.
 </p>
 <p><b>Reflection:</b><br></br>


This is a topic which I went into entirely blind. Through working on automating uFees Reports using Power BI, I got to use DAX functions to summarize (pretty much the DAX version of group by) and apply an aggregation in the form of an average across the grouped rows to get the data into a state where I could apply an effective rate calculation based off of the manual process of the report creation. I got some exposure to SQL when I got to look at, and track the functionality of a stored procedure used to retrieve data in the previous application that I am working to migrate to MW Fee Navigator. It was interesting to see that stored procedures could take parameters to allow for things like filtering a dataset for a user specified value from the frontend.
</p>
   </div>
   <br></br>

      <h2 className="text-3xl text-[#ffbf00ff] font-bold">Goal 3</h2>
      <p><b>Learning Goal:</b>
      <br></br>
Learn more about how Javascript (Using the react library) can be used to implement functionality of interactive elements like buttons, navigation menus, etc. in a website. </p>
<p> <br></br> <br></br><b>Reflection:</b><br></br>Getting to use Javascript in the development of the GIC Fee Automation page and Advisor Ticket Reports page in the MW Fee Navigator internal application was really nice as it's not a language that I used in school, so I was happy to get more familiar with it. I did have some prior experience with JS and React going into it, but there's so much that I've learned as well. <br></br> <br></br>



Take providers for example. In MW Fee Navigator, we use the kendo-react library for components like grids/tables for displaying data. When it comes to rendering custom components inside a telerik grid, kendo passes its own props to a child, so in order to pass state variables for use in any children components, I found myself using a context provider for the first time. I also got some use out of the kendo-react icons provider which I used to pass custom svg MUX icons to my grid and its children for custom styling for components where the necessary properties to pass my own images are not exposed. Providers are very useful for passing data to many child components!
<br></br>
<br></br>


I got introduced to the use of promises and async/await in the development of the GIC Fee Automation page. I learned that using the async keyword with a function makes it return a promise, while await pauses that function until the backend API returns the data we want to display to users. Using the async keywords makes a function asynchronous, allowing it to run in the background while the user can still interact with the webpage.</p>
    </div>
  );
}