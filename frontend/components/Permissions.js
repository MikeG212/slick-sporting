import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Table from './styles/Table';
import Error from './ErrorMessage';


const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = (props) => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) =>
      console.log(data) || (
      <div>
        <Error error={error} />
        <div>
          <h2>Manage Permissions</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user) => (user.name))}
            </tbody>
          </Table>
        </div>
      </div>
      )}

  </Query>
);

export default Permissions;
