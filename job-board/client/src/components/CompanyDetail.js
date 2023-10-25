import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../graphql/queries';
import JobList from './JobList';

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(companyId).then(setCompany)
  }, [companyId]);

  if (!company) {
    return (
      <>Loading...</>
    )
  } else {
    return (
      <div>
        <h1 className="title">
          {company.name}
        </h1>
        <div className="box">
          {company.description}
        </div>
        <div className="box">
         <JobList jobs={company.jobs}></JobList>
        </div>
      </div>
    );
  }
}

export default CompanyDetail;
