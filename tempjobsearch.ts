

interface Job{
    headline: string;
    publicationDate: string;
    employer:{
        name: string;
        url: string;
    }
    workplace_address: {
        municipality: string;
        region: string;
    }
}

interface JobSearchResponse {
    hits: Job[];
}


const searchJobs = async (city: string) => {
  try {
    const result = `https://jobsearch.api.jobtechdev.se/search?q=${city}&offset=0&limit=10`;
    const response = await fetch(result);
    const data: JobSearchResponse = await response.json();

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
    console.error(`Error in fetching data , ${error}`); //message
  }
};

const runApp = () => {
  try {
    console.log("Welcome to the Job Search App!");
    console.log("This app searches for jobs using JobTeach API");
    const keyword = "Malmo";
    searchJobs(keyword);
  } catch (error) {
    console.error(error);
  }
};

runApp();