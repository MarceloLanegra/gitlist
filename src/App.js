import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import RepoData from './components/Repo-data';
import { useEffect, useState } from 'react';
import { getRepos, getUser } from './services/users';
import {useParams} from 'react-router-dom'
import Modal from './components/Modal';

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
  const params = useParams()
  let username = params.user
  if(!username)
  {
    username='marcelolanegra'
  }
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])
  const [modal,setModal] = useState(false)
  const [search,setSearch] = useState('')
  useEffect(()=>{
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado a este usurio");
        return;
      }
      setUser(data);
    })
    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado los repositorios");
        return;
      }
      setRepos(data);
    });
  },[username])
  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} repoListCount={repos.length} />
      <RepoList search={search} repoList={repos} />
      <Search setModal={setModal} />
    </Layout>
  );
}

export default App;
