//Job search Assignment
// A function that searches for jobs
// A function that runs our app
// the command to start everything


//1 Tasks 
// Add TypeScript and Types and ESLint 
// Convert the project to TypeScript. 
// Add types to functions, variables, and API responses. 
// This will make the code safer and easier to understand. 
// Add ESLint 

//2. Improve the Job Search 
// Update the search functionality so users can search by both “city” and “profession” at the same time. 
// Example: 'Software Developer in Malmö'. 

//3. Error Handling 
// Add proper error handling using try/catch. 
// Make sure the program does not crash if the API request fails. 
// Show a clear error message in the console. 

// 4.Improve Logging with console.dir 
// Replace some console.log statements with console.dir. 
// Example: console.dir(object, { depth: null }) will log the entire object. 
// Try different depth values, like 2 or 3, to explore nested objects. 

const searchJobs = async (keyword: string) => {
  try {
    const result = `https://jobsearch.api.jobtechdev.se/search?q=${keyword}&offset=0&limit=10`;
    const response = await fetch(result);
    const data = await response.json();

    console.log(`\nFound ${data.hits.length} jobs`);
    console.log("-".repeat(50));
    //console.log(data);

    data.hits.forEach((job: any, index: number) => {
      const pubDate = new Date(job.publication_date);
      //console.log("pubDate: ", pubDate);

      console.log(`${index + 1}. ${job.headline}`);
      console.log(`Company: ${job.employer.name}`);
      console.log(`Location: ${job.workplace_address.municipality}`);
      console.log(`Publication: ${pubDate.toISOString().split("T")[0]}`);
      console.log("-".repeat(50));
    });
  } catch (error) {
    console.error(error);
  }
};

const runApp = () => {
  try {
    console.log("Welcome to the Job Search App!");
    console.log("This app searches for jobs using JobTeach API");
    const keyword = "Helsingborg";
    searchJobs(keyword);
  } catch (error) {
    console.error(error);
  }
};

runApp();