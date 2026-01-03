jobs = [
	{id : 1, isActive: true},
	{id : 2, isActive: true},
	{id : 3, isActive: false}
];

const activeJobs1 = jobs.filter(function(job) { return job.isActive; });
const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs1);
console.log(activeJobs2);