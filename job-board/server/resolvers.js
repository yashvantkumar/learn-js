import { Job, Company } from "./db.js";

export const resolvers = {
    Query: {
        job: (_root, { id }) => Job.findById(id),
        company: (_root, { id }) => Company.findById(id),
        jobs: () => Job.findAll(),
        companies: () => Company.findAll(),
    },

    Mutation: {
        createJob: (_root, { input }, { user }) => {
            console.log("user", user)
            if (!user) {
                throw new Error("Unauthorized");
            }
            const jobDetails = {
                ...input,
                companyId: user.companyId,
            }
            return Job.create(jobDetails);
        },
        deleteJob: (_root, { id }) => Job.delete(id),
        updateJob: (_root, { input }) => Job.update(input),
    },

    Job: {
        company: (job) => Company.findById(job.companyId)
    },

    Company: {
        jobs: (company) => Job.findAll((job) => {
            return job.companyId === company.id
        })
    }
};
