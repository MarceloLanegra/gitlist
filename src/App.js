import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import RepoData from './components/Repo-data';

const repoList = [
  {
    name: "Mi primer proyecto con React",
    id: 123,
  },
  {
    name: "Mi segundo proyecto con React",
    id: 1234,
  },
];

function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList repoList={RepoData}/>
      <Search/>
    </Layout>
  );
}

export default App;
