import { request } from 'graphql-request'
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
const GRAPHQL_URL = "http://localhost:9000/graphql";

const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
})

const getJobs = async () => {
    const query = gql`
        query JobsQuery {
            jobs {
                id,
                title,
                description,
                company {
                    id,
                    name
                }
            }
        }
    `;
    const { data: { jobs } } = await client.query({ query });
    return jobs;
};

const getJob = async (jobId) => {
    const query = gql`
        query FetchJob($id: ID!) {
            job(id: $id) {
                id,
                title,
                description,
                company {
                    id,
                    name
                }
            }
        }
    `;
    const variables = { id: jobId };
    const res = await request(GRAPHQL_URL, query, variables);
    return res.job;
};

const getCompany = async (id) => {
    const query = gql`
    query FetchCompany($id: ID!) {
        company(id: $id) {
            id,
            name,
            description
            jobs {
                id,
                title,
                description
            }
        }
    }
    `;
    const variables = { id };
    const res = await request(GRAPHQL_URL, query, variables);
    return res.company;
};

const createJob = async (input) => {
    const query = gql`
    mutation createJobMutation($input: CreateJobInput!) {
        job: createJob(input: $input) {
            id,
        }
    }
    `;
    const variables = { input };
    const res = await request(GRAPHQL_URL, query, variables);
    return res.job;
};

export {
    getJobs,
    getJob,
    getCompany,
    createJob,
};
