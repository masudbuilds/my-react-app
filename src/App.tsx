import { Suspense } from "react";
import { MainComponents } from "./components/MainComponents";
import type { Job } from "./types/Job";



const jobsPromise: Promise<Job[]> = fetch("/job.json").then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <MainComponents jobsPromise={jobsPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
